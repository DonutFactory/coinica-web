/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import moment from "moment";
import useSound from "use-sound";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { GetCharacterById } from "../../services/api/server/ghostquest_api";
import GET_GHOST_AVATAR from "../../helpers/ghostquest/getGhostAvatar";
import GHOST_LIFE_BAR from "../../helpers/ghostquest/getGhostLifeBar";
import { UnixMicroToDate } from "../../helpers/date";
import Header from "../GhostQuest/Header";
import Summon from "../GhostQuest/Summon";
import useResize from "../../helpers/hooks/useResize";
import CustomLoader from "../../components/Loader/CustomLoader";
import RulesComponent from "../GhostQuest/Rules";
import ModalErrorComponent from "./Modals/Error";
import ModalBattleLimit from "./Modals/BattleLimitReached";
import DepositConfirmation from "./Modals/DepositConfirmation";
import DepositSuccessful from "./Modals/DepositSuccessful";
import WithdrawalConfirmation from "./Modals/WithdrawalConfirmation";
import WithdrawalSuccessful from "./Modals/WithdrawalSuccessful";
import ResultsModal from "./Modals/Results";
import {
  BLOW_ATTACK_1,
  BLOW_ATTACK_2,
  BLOW_ATTACK_3,
  BtnBack,
  BtnRules,
  BtnDeposit,
  BtnWithdraw,
  battleIcon,
  ClickSound,
  CancelSound,
  SelectSound,
  ConfirmSound,
  BattleBGM,
  WaitingBGM,
  DamageSound,
  CriticalSound,
  Attack1Sound,
  WinSound,
  DefeatSound,
} from "./Assets";

import styles from "./GhostQuestGameplay.module.scss";

const GQfixedWidth = 1075
const GQfixedHeight = 750

const GhostQuestGameplay = (props) => {
  const GQ_VOLUME = props?.ghost_quest?.volume
  const addedCharLife = props?.location?.state?.addedCharLife
  const params = props?.location?.state?.params
  const inBattle = props?.location?.state?.inBattle
  const { account } = props.platform;
  const wsUsername = account?.username
  const username = account?.id
  const user_game_id = account?.user_game_id

  const [userCharacterData] = useState(params?.ghost_data['value'])
  const [userCharacterKey] = useState(params?.ghost_data['key'])
  useEffect(() => {
    console.log({ userCharacterKey, userCharacterData })
  }, [userCharacterData, userCharacterKey])

  // SOUNDS
  const [playClick] = useSound(ClickSound, { volume: 0.5 * GQ_VOLUME })
  const [playCancel] = useSound(CancelSound, { volume: 0.5 * GQ_VOLUME })
  const [playConfirmSound] = useSound(ConfirmSound, { volume: 0.5 * GQ_VOLUME })
  const [playSelectSound] = useSound(SelectSound, { volume: 0.5 * GQ_VOLUME })
  const [playAttack1] = useSound(Attack1Sound, { volume: 0.5 * GQ_VOLUME })
  const [playCritical] = useSound(CriticalSound, { volume: 0.5 * GQ_VOLUME })
  const [playDamage] = useSound(DamageSound, { volume: 0.2 * GQ_VOLUME })
  const [playWin] = useSound(WinSound, { volume: 0.5 * GQ_VOLUME })
  const [playDefeat] = useSound(DefeatSound, { volume: 0.5 * GQ_VOLUME })
  const [, battleBGM] = useSound(BattleBGM, { volume: 0.1 * GQ_VOLUME })
  const [, standbyBGM] = useSound(WaitingBGM, { volume: 0.1 * GQ_VOLUME })

  const battleBGMHandler = (bool) => {
    if (battleBGM.sound) {
      if (bool) {
        battleBGM.sound?.play()
        
        battleBGM.sound?.on('end', () => {
          battleBGM.sound?.play();
        })
      } else {
        battleBGM.sound?.stop();
      }
    }
  }

  const standbyBGMHandler = (bool) => {
    if (standbyBGM.sound) {
      if (bool) {
        standbyBGM.sound?.play()

        standbyBGM.sound?.on('end', () => {
          standbyBGM.sound?.play();
        })
      } else {
        standbyBGM.sound?.stop();
      }
    }
  }


  // INIT. STATES
  /**
   * enemyFoundState:
   * 0: not found
   * 1: loading
   * 2: found
   */
  const [enemyFoundState, setEnemyFoundState] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const battleLogsRef = useRef<HTMLDivElement | null>(null)
  const [initialized, setInitialized] = useState(false)
  const [summonState, showSummon] = useState(false)
  const [scale, setScale] = useState(1)
  const [loading, setLoading] = useState({ state: true, text: 'Initializing...' })
  const [ghostHistorySelected, setGhostHistoryButton] = useState(false)
  const [txId, setTxId] = useState<any>(null)

  // GAME TIMER
  const [noOpponentFound, setNoOpponent] = useState(false)
  const [timerText, setTimerText] = useState<any>(null)
  const [nextBattleTime, setBattleTime] = useState<any>(null)
  const [isBattleDone, setBattleDone] = useState(false)
  const [fetchLatestMatch, setFetchLatestMatch] = useState(false)
  
  // CHARACTER DATA
  const [charHP, setCharHP] = useState(0)
  const [enemyHP, setEnemyHP] = useState(0)
  const [charData, setCharData] = useState<any>(null)
  const [enemyCharData, setEnemyCharData] = useState<any>(null)
  const [enemyGhostAvatar, setEnemyGhostAvatar] = useState<any>(null)
  const [ghostHistory, setGhostHistory] = useState<any>(null)
  const [latestMatch, setLatestMatch] = useState<any>(null)

  // ANIMATIONS
  const [isAnimationPlaying, setAnimationPlaying] = useState(false)
  const [skipped, setSkip] = useState(false)
  const [animationCounter, setAnimationCounter] = useState(0)
  const [roundCounter, setRoundCounter] = useState(0)
  const [currentAttack, setCurrentAttack] = useState<any>(null)
  const [animationBattleLogs, setAnimationBattleLogs] = useState<string[]>([])

  // MODALS
  const [summoning, setSummoning] = useState(false)
  const [isDeposit, setIsDeposit] = useState(false)
  const [results, showResults] = useState({ state: false, isWin: false, player: '', enemy: '' })
  const [rulesState, showRules] = useState(false)
  const [modalErrorState, showModalError] = useState(false)
  const [modalBattleLimit, showModalBattleLimit] = useState(false)
  const [depositConfirmationState, showDepositConfirmation] = useState(false)
  const [depositSuccessfulState, showDepositSuccessful] = useState(false)
  const [withdrawalConfirmationState, showWithdrawalConfirmation] = useState(false)
  const [WithdrawalSuccessfulState, showWithdrawalSuccessful] = useState(false)

  // INITIALIZING GAME DATA
  useEffect(() => {
    if (account && user_game_id) {
      if (params == null) {
        props.history.push('/game/ghostquest')
        return
      }

      if (initialized) return
      setInitialized(true)
      console.log({ params })
    } else {
      toast.error('Please login your account')
      props.history.push("/game/ghostquest")
    }
  }, [account])

  useResize(ref, (resizeResponse) => {
    const { width, height } = resizeResponse
    const scaleValue = Math.min(width / GQfixedWidth, height / GQfixedHeight)
    setScale(scaleValue * 0.9)
  });

  const requestBattleTimer = () => {
    if (!window.gqWS) return
    const obj = JSON.stringify({
      id: wsUsername,
      input: {
        GQ_NEXT_BATTLE: 'get'
      }
    })
    window.gqWS.send(obj)

    window.gqWS.onmessage = (event) => {
      console.log({ requestBattleTimerEvent: event })
      const { data } = event
      if (data) {
        const InitBattleHTML = (
          <span>
            Finding opponent...
            <img className={styles.batleIcon} src={battleIcon} alt="Loading..." />
          </span>
        )
        const parsedData = JSON.parse(data)
        // console.log('WITH VALID DATA: ', { parsedData, shouldUpdateTimer: typeof parsedData?.response === 'object' })
        if (typeof parsedData?.response === 'object' && parsedData?.id === 'GQ') {
          const { NEXT_BATTLE, STATUS } = parsedData?.response
          if (NEXT_BATTLE && STATUS === "BATTLE_STANDY") {
            setBattleTime(NEXT_BATTLE)
          }
          else if (NEXT_BATTLE && STATUS === "NO_CHARACTERS_AVAILABLE") {
            setBattleTime(NEXT_BATTLE)
            setNoOpponent(true)
          }
          else if (NEXT_BATTLE && STATUS === "BATTLE_FINISHED") {
            console.log('FETCHING LATEST MATCH...')
            setFetchLatestMatch(true)
            setBattleTime(NEXT_BATTLE)
          }
          else if (STATUS === "ON_BATTLE") {
            setTimerText(InitBattleHTML)
          }
        }
      }
    }
  }

  const callTimer = () => {
    if (window.gqWS) {
      if (window.gqWS?.readyState === 1) {
        requestBattleTimer()
      }
    }
  }

  useEffect(() => {
    const interval = 1000;
    let nextBattleTimer:any =  null 

    if (nextBattleTime) {
      nextBattleTimer = setInterval(() => {
        if (nextBattleTime) {
          const nextBattle = nextBattleTime
          const currentTime = moment().unix()
          const diffTime = nextBattle - currentTime;
          const duration = moment.duration(diffTime*1000, 'milliseconds');
  
          if (duration.seconds() < 0) {
            const InitBattleHTML = (
              <span>
                Finding oponent...
                <img className={styles.batleIcon} src={battleIcon} alt="Loading..." />
              </span>
            )
            setTimerText(InitBattleHTML)
          } else {
            setTimerText(`Next battle for all the ghosts will commence in ${duration.minutes()}m:${duration.seconds()}s`)
          }
        }
      }, interval)
    } else {
      if (!nextBattleTimer) return
      clearInterval(nextBattleTimer)
    }

    return () => {
      if (!nextBattleTimer) return
      clearInterval(nextBattleTimer)
    }
  }, [nextBattleTime])

  const playNextBattle = (userLatestMatch, bools) => {
    console.log('PLAYING NEXT BATTLE WITH DATA: ', userLatestMatch, { isUnderThirtyMins: bools})
  }

  useEffect(() => {
    if (fetchLatestMatch) {
      setFetchLatestMatch(false)

      const userCharKey = params?.ghost_data?.key
      if (userCharKey) {
        GetCharacterById(userCharKey).then(res => {
          console.log({ USER_CHAR_DATA: res })
          let userLatestMatch:any = []
          if (Array.isArray(res?.data) && res?.data.length) {
            const charData = res?.data[0]

            if (Array.isArray(charData) && charData.length) {
              const battles = Array.isArray(charData) ? charData[1] : null

              if (battles && battles.length) {
                const sortedBattles = [...battles].sort((a, b) => a?.timeExecuted - b?.timeExecuted)

                if (sortedBattles.length) {
                  userLatestMatch = sortedBattles[sortedBattles.length - 1]
                  const lastMatchTime = moment.unix(+userLatestMatch?.timeExecuted)
                  const currentTime = moment()
                  const relativeTimeInMinutes = currentTime.diff(lastMatchTime, 'minutes')

                  if (relativeTimeInMinutes < 30) {
                    setNoOpponent(false)
                    playNextBattle(userLatestMatch, true)
                  } else {
                    playNextBattle(userLatestMatch, false)
                    // setNoOpponent(true)
                  }
                }
              }
            }
          }
        }).catch(err => {
          console.log({ USER_CHAR_DATA_ERR: err })
        })
      }

    }
  }, [fetchLatestMatch])

  useEffect(() => {
    callTimer()
  }, [window.gqWS])

  // UPDATING CHARACTER LIFE DATA ON ROUTE PARAMETERS AFTER
  // A SUCCESSFULL DEPOSIT
  useEffect(() => {
    if (depositSuccessfulState) {
      showResults({ state: false, isWin: false, player: '', enemy: '' })

      const data = JSON.stringify({
        id: wsUsername,
        input: { character_created: true }
      })

      if (window.gqWS) {
        window.gqWS.send(data)
      }

      const newParams = {
        ...params,
        ghost_data: {
          key: userCharacterKey,
          value: {
            ...userCharacterData,
            character_life: userCharacterData?.character_life + 1
          }
        }
      }
      console.log({ newParams, oldParams: params })
      props.history.replace("/game/ghostquest/gameplay", { inBattle, params: newParams, addedCharLife: true })
    }
  }, [depositSuccessfulState])

  // SETTING VARIABLES DATA ONCE GAME IS INITIALIZED
  useEffect(() => {
    if (initialized) {
      const charBattles = [...params?.ghost_history?.sort((a, b) => a?.timeExecuted - b?.timeExecuted)]
      const latestMatchIndex = charBattles.length

      // const userCharKey = params?.ghost_data?.KEY
      // if (userCharKey) {
      //   GetCharacterByUserAndId(username, userCharKey).then(res => {
      //     let userLatestMatch:any = []
      //     if (Array.isArray(res?.data) && res?.data.length) {
      //       const charData = res?.data[0]

      //       if (Array.isArray(charData) && charData.length) {
      //         const battles = Array.isArray(charData) ? charData[1] : null

      //         if (battles && battles.length) {
      //           const sortedBattles = [...battles].sort((a, b) => a?.timeExecuted - b?.timeExecuted)

      //           if (sortedBattles.length) {
      //             userLatestMatch = sortedBattles[sortedBattles.length - 1]
      //             const lastMatchTime = moment.unix(+userLatestMatch?.timeExecuted)
      //             const currentTime = moment()
      //             const relativeTimeInHours = currentTime.diff(lastMatchTime, 'minutes')
      //             console.log({ lastMatchTime, currentTime, relativeTimeInHours })
      //           }
      //           console.log({ sortedBattles, userLatestMatch })
      //         }
      //       }
      //     }
      //     console.log({ USER_CHAR_DATA: res })
      //   }).catch(err => {
      //     console.log({ USER_CHAR_DATA_ERR: err })
      //   })
      // }

      // IF IN-BATTLE
      if (inBattle) {
        const latestMatch = {...charBattles[latestMatchIndex - 1]}
        let latestMatchLogs:any = []

        if (latestMatch?.logs?.length) {
          latestMatch?.logs?.forEach((log) => {
            latestMatchLogs.push({ ...log })
          })

          latestMatch.logs = latestMatchLogs
        }

        setCharData({ ...userCharacterData, key: userCharacterKey })
        setCharHP(userCharacterData?.hitpoints || 0)
        if (latestMatchIndex) {
          setGhostHistory(charBattles)
          setLatestMatch(latestMatch)
        } else {
          setGhostHistory(null)
          setLatestMatch(null)
        }

        // FETCHING ENEMY CHARACTER DATA
        if (latestMatchIndex) {
          const enemyCharId = latestMatch?.loserID === userCharacterKey ? latestMatch?.winnerID : latestMatch?.loserID
          // const enemyUsername = latestMatch?.is_win?.find(obj => obj?.player !== username)?.player
          // const enemyCharId = latestMatch?.is_win?.find(obj => obj?.player === enemyUsername)?.char_id

          GetCharacterById(enemyCharId).then(res => {
            let data:any = null
            if (res.data.length) {
              data = res?.data[0][0]
            }
            console.log({ ENEMY_CHAR_DATA: data })
            const flattenData = {...data?.value, key: data?.key }
            if (flattenData) {
              setEnemyHP(flattenData?.hitpoints)
            }
            setEnemyCharData(flattenData)
          }).catch((err) => {
            console.log({ GetCharacterByIdErr: err })
            setEnemyCharData(null)
            setEnemyHP(0)
          }).finally(() => {
            setLoading({ state: false, text: '' })
          })
        } else {
          setEnemyCharData(null)
          setLoading({ state: false, text: '' })
        }
      }
      // IF BATTLE-END
      else {
        setCharData({ ...userCharacterData, key: userCharacterKey })
        if (latestMatchIndex) {
          setGhostHistory(charBattles)
        } else {
          setGhostHistory(null)
        }
        setLoading({ state: false, text: '' })
      }
    }

  }, [initialized, inBattle, params])

  /**
   * SOUNDS LISTENER
   */
  useEffect(() => {
    if (initialized) {
      if (isAnimationPlaying) {
        standbyBGMHandler(false)
        battleBGMHandler(true)
      } else {
        standbyBGMHandler(true)
        battleBGMHandler(false)
      }
    }

    return () => {
      if (standbyBGM) {
        standbyBGM.sound?.stop()
      }
      if (battleBGM) {
        battleBGM.sound?.stop()
      }
    }
  }, [initialized, isAnimationPlaying, battleBGM.sound, standbyBGM.sound])

  // INITIALIZE ANIMATION IF THERE IS A RECENT MATCH OF THE CHARACTER
  useEffect(() => {
    const updateEnemyGhostAvatar = (ghost_id) => {
      let image = GET_GHOST_AVATAR({ ghost_id })
      setEnemyGhostAvatar(image)
    }

    if (latestMatch && enemyCharData) {
      if (enemyGhostAvatar === null) {
        updateEnemyGhostAvatar(enemyCharData?.ghost_id)
      }
      /*
        addedCharLife:
        BUG: IF USER MADE A DEPOSIT, THE ANIMATION RESETS
        FIX: IF THERE IS A DEPOSIT SUCCESSFUL EVENT, DO NOT SET ANIMATION FLAG
      */
      if (addedCharLife) return

      const attackAnimationCount = latestMatch?.logs?.length
      const match_date = `Match date: ${UnixMicroToDate((+latestMatch?.timeExecuted), "MM/DD/YYYY hh:mm A ", null)}`
      const battle_log = 'Matchmaking in progress...'

      setEnemyFoundState(1)
      setAnimationCounter(attackAnimationCount)
      setAnimationBattleLogs(prevArr => [...prevArr, match_date, battle_log])
      setTimeout(() => {
        const enemyGhostId = enemyCharData?.key
        const enemyGhostExtractedId = enemyGhostId ? (enemyGhostId + '').substr(enemyGhostId.length - 12) : `other player's ghost`
        const battle_log = `You are matched with ${enemyGhostExtractedId}, Battle is starting...`

        setEnemyFoundState(2)
        setAnimationBattleLogs(prevArr => [...prevArr, battle_log])

        setTimeout(() => {
          setAnimationPlaying(true)
        }, 2000)
      }, 2000)
    } else {
      setEnemyFoundState(0)
      setAnimationPlaying(false)
    }
  }, [latestMatch, enemyCharData])
  
  // ANIMATION PROCESSES
  useEffect(() => {
    const winner = latestMatch?.winner
    // const charGhostId = userCharacterKey
    // const charGhostExtractedId = charGhostId ? (charGhostId + '').substr(charGhostId.length - 12) : `Your character`
    const charGhostExtractedId = charData ? charData?.ghost_name : `Your character`
    // const enemyGhostId = enemyCharData?.key
    // const enemyGhostExtractedId = enemyGhostId ? (enemyGhostId + '').substr(enemyGhostId.length - 12) : `the enemy's character`
    const enemyGhostExtractedId = enemyCharData ? enemyCharData?.ghost_name : `the enemy's character`

    if (isAnimationPlaying && !skipped) {
      if (animationCounter >= 0 && currentAttack === null) {
        if (roundCounter < latestMatch?.logs?.length) {
          const DATA = latestMatch?.logs[roundCounter]
          if (DATA) {
            const battle_log:any = []
            if (DATA.defender === user_game_id) {
              if (DATA.is_crit) {
                battle_log.push(`A critical hit! enemy's ghost ${enemyGhostExtractedId} gave ${DATA.damage} damage to ${charGhostExtractedId}`)
              } else {
                battle_log.push(`Enemy's ghost ${enemyGhostExtractedId} gave ${DATA.damage} damage to ${charGhostExtractedId}`)
              }
            } else {
              if (DATA.is_crit) {
                battle_log.push(`A critical hit! your ghost ${charGhostExtractedId} gave ${DATA.damage} damage to ${enemyGhostExtractedId}`)
              } else {
                battle_log.push(`Your ghost ${charGhostExtractedId} gave ${DATA.damage} damage to ${enemyGhostExtractedId}`)
              }
            }

            setTimeout(() => {
              setRoundCounter(prevCount => prevCount + 1)
              setAnimationCounter(prevCount => prevCount - 1)

              if (DATA?.defender === user_game_id) {
                if (DATA?.is_crit) {
                  for (let i = 1; i < 4; i ++) {
                    setTimeout(() => {
                      playCritical()
                    }, i*500)
                  }
                } else {
                  for (let i = 1; i < 4; i ++) {
                    setTimeout(() => {
                      playDamage()
                    }, i*500)
                  }
                }
              } else {
                if (DATA?.is_crit) {
                  for (let i = 1; i < 4; i ++) {
                    setTimeout(() => {
                      playCritical()
                    }, i*500)
                  }
                } else {
                  for (let i = 1; i < 4; i ++) {
                    setTimeout(() => {
                      playAttack1()
                    }, i*500)
                  }
                }
              }

              if (DATA?.is_crit !== undefined) {
                setCurrentAttack(DATA)

                // SET BATTLE LOG ANIMATION
                setTimeout(() => {
                  setAnimationBattleLogs(prevArr => [...prevArr, ...battle_log])
                }, 2500)
              }
            }, 1500)
          }
        } else {
          let battle_log:any = [`Battle Outcome : `]
          if (winner === user_game_id) {
            battle_log.push(`Your ghost ${charGhostExtractedId} has won against enemy's ghost ${enemyGhostExtractedId}`)
          } else {
            battle_log.push(`Your ghost ${charGhostExtractedId} was defeated against enemy's ghost ${enemyGhostExtractedId}`)
          }

          setTimeout(() => {
            if (winner === user_game_id) {
              playWin()
            } else {
              playDefeat()
            }

            setEnemyFoundState(0)
            setAnimationPlaying(false)
            showResults({
              state: true,
              isWin: user_game_id === winner,
              player: charGhostExtractedId,
              enemy: enemyGhostExtractedId
            })
            setAnimationBattleLogs(prevArr => [...prevArr, ...battle_log])
          }, 1500)
        }
      }
    } else if (isAnimationPlaying && skipped) {
      setEnemyFoundState(0)
      setAnimationPlaying(false)

      let totalEnemyDamageTaken = 0
      let totalCharDamageTaken = 0
      let battle_logs:any = []
      const enemyGhostId = enemyCharData?.key ? (enemyCharData?.key + '').substr(enemyCharData?.key.length - 12) : `other player's ghost`

      battle_logs.push('Matching process in progress...')
      battle_logs.push(`You are matched with ${enemyGhostId}, Battle is starting...`)

      latestMatch?.logs?.map(DATA => {
        const { defender, damage } = DATA
        if (defender === enemyCharData?.owner_id) {
          totalEnemyDamageTaken += damage
        } else if (defender === user_game_id) {
          totalCharDamageTaken += damage
        }

        if (DATA?.defender === user_game_id) {
          if (DATA?.is_crit) {
            battle_logs.push(`A critical hit! enemy's ghost ${enemyGhostExtractedId} gave ${DATA?.damage} damage to ${charGhostExtractedId}`)
          } else {
            battle_logs.push(`Enemy's ghost ${enemyGhostExtractedId} gave ${DATA?.damage} damage to ${charGhostExtractedId}`)
          }
        } else {
          if (DATA?.is_crit) {
            battle_logs.push(`A critical hit! your ghost ${charGhostExtractedId} gave ${DATA?.damage} damage to ${enemyGhostExtractedId}`)
          } else {
            battle_logs.push(`Your ghost ${charGhostExtractedId} gave ${DATA?.damage} damage to ${enemyGhostExtractedId}`)
          }
        }
        // battle_logs.push(`Round ${DATA.round} : Character of ${DATA.defender} took ${DATA.damage} from character of ${DATA.attacker}`)
      })

      if (winner === user_game_id) {
        playWin()
        battle_logs.push(`Battle Outcome : Your ghost ${charGhostExtractedId} has won against enemy's ghost ${enemyGhostExtractedId}`)
      } else {
        playDefeat()
        battle_logs.push(`Battle Outcome : Your ghost ${charGhostExtractedId} was defeated against enemy's ghost ${enemyGhostExtractedId}`)
      }

      setAnimationBattleLogs(battle_logs)
      setEnemyHP(() => {
        const tempHP = enemyCharData?.hitpoints - totalEnemyDamageTaken
        const finalHP = tempHP > 0 ? tempHP : 0
        return finalHP
      })
      setCharHP(() => {
        const tempHP = charData?.hitpoints - totalCharDamageTaken
        const finalHP = tempHP > 0 ? tempHP : 0
        return finalHP
      })
      
      showResults({
        state: true,
        isWin: user_game_id === winner,
        player: charGhostExtractedId,
        enemy: enemyGhostExtractedId
      })
    }
  }, [isAnimationPlaying, skipped, currentAttack])

  useEffect(() => {
    if (results?.state) {
      if (!isBattleDone) {
        setBattleDone(true)
      }
    }
  }, [results])

  // REMOVING BLOW ATTACK GIF
  useEffect(() => {
    if (currentAttack !== null && !skipped) {
      const { defender, damage } = currentAttack
      if (defender === enemyCharData?.owner_id) {
        setEnemyHP(prevHP => {
          const newHP = prevHP - damage > 0 ? prevHP - damage : 0
          return newHP
        })
      } else if (defender === user_game_id) {
        setCharHP(prevHP => {
          const newHP = prevHP - damage > 0 ? prevHP - damage : 0
          return newHP 
        })
      }

      // TO HIDE ANIMATION EFFECTS
      setTimeout(() => {
        setCurrentAttack(null)
      }, 3000)
    }
  }, [currentAttack])

  useEffect(() => {
    /**
     * THIS IS TO FIX ISSUE IN BATTLE LOGS WHEN
     * BATTLE LOGS IS ANIMATING AND USER PRESSED SKIP BUTTON
     * KNOWN ISSUE: THE LAST QUEUE IN LOGS WHILE ANIMATING
     * WILL BE ADDED TO THE FINAL BATTLE LOGS (SKIPPED)
     * SINCE ANIMATING LOGS USES SETTIMEOUT FUNCTION
     */
    if (skipped) {
      const battleLogs = [...animationBattleLogs]
      const length = battleLogs.length
      const lastLog = battleLogs[length - 1]?.substr(0, 14)
      
      if (lastLog !== 'Battle Outcome' && length) {
        battleLogs.pop()
        setAnimationBattleLogs(battleLogs)
      }
    }
  }, [animationBattleLogs])

  // SCROLL BATTLE LOGS TO BOTTOM WHILE ANIMATING
  useEffect(() => {
    if (battleLogsRef.current) {
      battleLogsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [animationBattleLogs])

  // SOUNDS
  useEffect(() => {
    if (summoning) {
      standbyBGMHandler(false)
    }
  }, [summoning])

  const skipBattleAnimationHandler = () => {
    setCurrentAttack(null)
    setSkip(true)
    setAnimationCounter(0)
  }
  
  const goBackHandler = () => {
    // props.history.goBack()
    playCancel()
    props.history.push('/game/ghostquest/ghostlist', { isFromBattleEndScreen: !inBattle })
  }

  const _showDepositConfirmation = () => {
    playConfirmSound()
    setIsDeposit(true)
    showDepositConfirmation(true)
  }

  const _showWithdrawalConfirmation = () => {
    playSelectSound()
    setIsDeposit(false)

    if (charData?.battle_count === 0) {
      toast.warning(`Sorry, your ghost has not been in a battle yet`)
      return
    } else if (charData?.battle_count > 0 && charData?.character_life <= 0) {
      showModalError(true)
      return
    }

    showWithdrawalConfirmation(true)
  }

  const BLOW_ATTACK_GIF = (currentAttack) => {
    let img:any = null

    if (currentAttack !== null) {
      if (currentAttack?.is_crit) {
        img = <img src={BLOW_ATTACK_3} alt="Attack animation" style={{ width: '100%' }} />
      } else {
        if (currentAttack?.attacker === user_game_id) {
          // IF USER IS THE ATTACKER
          img = (
            <img
              src={BLOW_ATTACK_1}
              alt="Attack animation"
              style={{
                width: '22%',
                position: 'absolute',
                top: '70px',
                left: '30%',
              }}
              />
              )
        } else {
          // IF USER IS THE DEFENDER
          img = (
            <img
              src={BLOW_ATTACK_2}
              alt="Attack animation"
              style={{
                width: '22%',
                position: 'absolute',
                top: '155px',
                left: '50px',
              }}
            />
          )
        }
      }
    }

    return (
      <div
        className={styles.animationContainer}
        style={{
          zIndex: isAnimationPlaying ? 998 : 0 // lower than REACT TOASTIFY with zIndex of 999
        }}
        >
        {img}
      </div>
    )
  }
  
  const battleLogStyle = inBattle ? (
    { height: '333px', top: '270px' }
  ) : (
    { height: '553px', top: '51px' }
  )


  let player_hp_bar:any = null
  let enemy_hp_bar:any = null
  if (enemyCharData) {
    enemy_hp_bar = GHOST_LIFE_BAR(enemyHP, enemyCharData?.hitpoints)
  }
  if (charData) {
    player_hp_bar = GHOST_LIFE_BAR(charHP, charData?.hitpoints)
  }

  return (
    <div className={styles.parent_container} ref={ref}>
      <CustomLoader visible={loading.state} text={loading.text} />
      <div
        className={styles.scalable_container}
        style={{
          zoom: scale,
          minWidth: `${GQfixedWidth}px`,
          maxWidth: `${GQfixedWidth}px`,
          height: `${GQfixedHeight}px`
        }}
      >
        <Summon
          username={wsUsername}
          navigation={props}
          summonState={summonState}
          showSummon={showSummon}
          setSummoning={setSummoning}
        />
        <RulesComponent
          ruleslState={rulesState}
          showRules={showRules}
        />
        <ModalErrorComponent
          modalErrorState={modalErrorState}
          showModalError={showModalError}
          isDeposit={isDeposit}
        />
        <ModalBattleLimit
          modalBattleLimit={modalBattleLimit}
          showModalBattleLimit={showModalBattleLimit}
        />
        <DepositConfirmation
          props={props}
          setLoading={setLoading}
          depositConfirmationState={depositConfirmationState}
          showDepositConfirmation={showDepositConfirmation}
          showDepositSuccessful={showDepositSuccessful}
          charData={charData}
          showModalError={showModalError}
          setTxId={setTxId}
        />
        <DepositSuccessful
          depositSuccessfulState={depositSuccessfulState}
          showDepositSuccessful={showDepositSuccessful}
          txId={txId}
          setTxId={setTxId}
        />
        <WithdrawalConfirmation
          username={wsUsername}
          charData={charData}
          setLoading={setLoading}
          withdrawalConfirmationState={withdrawalConfirmationState}
          showWithdrawalConfirmation={showWithdrawalConfirmation}
          showWithdrawalSuccessful={showWithdrawalSuccessful}
          setTxId={setTxId}
        />
        <WithdrawalSuccessful
          charData={charData}
          WithdrawalSuccessfulState={WithdrawalSuccessfulState}
          showWithdrawalSuccessful={showWithdrawalSuccessful}
          txId={txId}
          setTxId={setTxId}
        />
        <ResultsModal
          results={results}
          showResults={showResults}
        />
        <div className={styles.header}>
          <Header {...props} username={username} showSummon={showSummon} />
        </div>

        {/* ATTACK ANIMATION */}
        {!skipped ? BLOW_ATTACK_GIF(currentAttack) : null}
        {/* END ATTACK ANIMATION */}

        <div className={styles.contents}>
          {/* USER CHARACTER GHOSTS DETAILS (START) */}
          {
            <div
              className={`
                ${styles.playerDetails}
                ${
                  !skipped && currentAttack !== null && currentAttack?.defender === user_game_id 
                  ? currentAttack?.is_crit
                  ? styles.bigShake_div // if attack is crit
                  : styles.shake_div  // if attack is not crit
                  : '' // if user is not the defender
                }
                ${charHP <= 8 ? styles.redText : charHP <= 28 ? styles.yellowText : ''}
              `}
            >
              <div className={styles.playerName}>
                <h5>Ghost name: {charData?.ghost_name}</h5>
                <h5>
                  Player: {' '}
                  {
                    userCharacterKey
                    ? (userCharacterKey + '').substr(userCharacterKey.length - 12)
                    : ''
                  }
                </h5>
                <h5>
                  Life: {`${addedCharLife ? params?.ghost_data?.value?.character_life : charData?.character_life}`}
                </h5>
              </div>
              <div className={styles.playerGhost}>
                {
                  params?.ghost_avatar != null ? (
                    // <img className={styles.ghostImage} src={params?.ghost_avatar} alt="Ghost Avatar" />
                    <div
                      className={styles.ghostImage}
                      style={{
                        backgroundImage: `url(${params?.ghost_avatar})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  ) : (
                    <Spinner animation="grow" style={{color: '#fff'}} />
                  )
                }
              </div>
              <div className={styles.playerStatsContainer}>
                <div className={styles.charHpBar}>
                  {player_hp_bar}
                </div>
                <div className={styles.playerStat}>
                  <h5>HP:</h5>
                  <h5>{`${charHP || 0} / ${charData?.hitpoints}`}</h5>
                </div>
                <div className={styles.playerStat}>
                  <h5>ATTACK:</h5>
                  <h5>{charData?.attack || 'No data'}</h5>
                </div>
                <div className={styles.playerStat}>
                  <h5>DEFENSE:</h5>
                  <h5>{charData?.defense || 'No data'}</h5>
                </div>
                <div className={styles.playerStat}>
                  <h5>SPEED:</h5>
                  <h5>{charData?.speed || 'No data'}</h5>
                </div>
                <div className={styles.playerStat}>
                  <h5>LUCK:</h5>
                  <h5>{charData?.luck || 'No data'}</h5>
                </div>
              </div>
            </div>
          }
          {/* USER CHARACTER GHOSTS DETAILS (END) */}

          {
            /* THIS SECTION WILL SHOW ONLY IF THE GHOST IS FROM IN-BATTLE LIST */
            inBattle && (
              <div
                className={`
                  ${styles.enemyContainer}
                  ${
                    !skipped && currentAttack !== null && currentAttack?.defender === enemyCharData?.owner_id 
                    ? currentAttack?.is_crit
                    ? styles.bigShake_div // if attack is crit
                    : styles.shake_div  // if attack is not crit
                    : '' // if the enemy is not the defender
                  }
                `}
              >
                <div className={`${styles.enemyBtn} hover-cursor`}>
                  {
                    enemyCharData === null ? (
                      <h4>Options</h4>
                    ) : (
                      <h4>Enemy</h4>
                    )
                  }
                </div>
                <div
                  className={`
                    ${styles.enemyData}
                    ${enemyHP <= 8 ? styles.redText : enemyHP <= 28 ? styles.yellowText : ''}
                  `}
                >
                  {
                    // IF GAMEPLAY IS INITIALIZING
                    !initialized || loading.state === true || enemyFoundState === 1 ? (
                      <div className="text-center">
                        <Spinner animation="grow" style={{color: '#fff'}} />
                      </div>
                    )
                    // IF GHOST ALREADY HAS AN OPONENT => SHOW THE BATTLE ANIMATIONS
                    : isAnimationPlaying && enemyFoundState === 2 ? (
                      (
                        <>
                          {
                            enemyCharData !== null ? (
                              // <img className={styles.enemyGhostImage} src={enemyGhostAvatar} alt="Ghost Avatar" />
                              <div
                                className={styles.enemyGhostImage}
                                style={{
                                  backgroundImage: `url(${enemyGhostAvatar})`,
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                }}
                              />
                            ) : (
                              <Spinner animation="grow" style={{color: '#fff'}} />
                            )
                          }
                          <div className={styles.enemyDetailsLeft}>
                            <h5>Ghost name: {enemyCharData?.ghost_name}</h5>
                            <h5>
                              Player: {' '}
                              {
                                enemyCharData?.key
                                ? (enemyCharData.key + '').substr(enemyCharData.key.length - 12)
                                : ''
                              }
                            </h5>
                            <h5>Life: {enemyCharData ? `${enemyCharData?.character_life}` : 'No data'}</h5>
                            <div className={styles.enemyHpBar}>
                              {enemy_hp_bar}
                            </div>
  
                          </div>
                          <div className={styles.enemyDetailsRight}>
                            <h5>HP: {enemyCharData ? `${enemyHP} / ${enemyCharData?.hitpoints}` : 'No data' }</h5>
                            <h5>ATK: {enemyCharData?.attack || 'No data'}  DEF: {enemyCharData?.defense || 'No data'}</h5>
                            <h5>SPD: {enemyCharData?.speed || 'No data'}  LUK: {enemyCharData?.luck || 'No data'}</h5>
                          </div>
                        </>
                      )
                    )
                    // IF GHOST IS STANDBY MEANING THERE IS NO ENEMY YET
                    : !isAnimationPlaying && enemyFoundState === 0 ? (
                      <div className="text-center">
                        <h4 className="text-white">You can deposit and withdraw while your ghost stands by.</h4>
                        <img
                          src={BtnDeposit}
                          alt="Deposit"
                          className="hover-cursor"
                          style={{ marginRight: '60px' }}
                          onClick={() => _showDepositConfirmation()}
                        />
                        <img
                          src={BtnWithdraw}
                          alt="Withdraw"
                          className="hover-cursor"
                          onClick={() => _showWithdrawalConfirmation()}
                        />
                      </div>
                    )
                    : (
                      <div className="text-center">
                        <Spinner animation="grow" style={{color: '#fff'}} />
                      </div>
                    )
                  }
                </div>
              </div>
            )
          }

          {/* BATTLE AND GHOST HISTORY LOGS (START) */}
          <div className={styles.historyAndLogs} style={battleLogStyle}>
            <div
              className={`${styles.battleLogBtn} ${ghostHistorySelected ? '' : styles.btnActive} hover-cursor`}
              onClick={() => {
                playClick()
                setGhostHistoryButton(false)
              }}
            >
              <h4>Battle Log</h4>
            </div>
            {
              inBattle && (
                <div
                  className={`${styles.ghostHistoryBtn} ${ghostHistorySelected ? styles.btnActive : ''} hover-cursor`}
                  onClick={() => {
                    playClick()
                    setGhostHistoryButton(true)
                  }}
                >
                  <h4>Ghost History</h4>
                </div>
              )
            }
            <div className={styles.battleLogContainer}>
              {
                inBattle ? (
                  /******** IN-BATTLE GHOST ********/
                  ghostHistorySelected ? (
                    /* GHOST HISTORY LOGS */
                    <>
                      <div className={styles.battleLog}>
                        {
                          ghostHistory
                          ? ghostHistory.map((history, idx) => {
                              const date = UnixMicroToDate((+history?.timeExecuted), "MM/DD/YYYY hh:mm:ss A ", null)
                              const enemyWon = history?.winner !== user_game_id
                              const enemyGhostId = enemyWon ? history?.winnerID : history?.loserID
                              const userGhostId = enemyWon ? history?.loserID : history?.winnerID
                              return (
                                <div key={idx}>
                                  <p className={styles.battleLogText}>Match date: {date}</p>
                                  <p className={styles.battleLogText}>
                                    {`
                                      Battle Outcome : 
                                      ${userGhostId ? (userGhostId + '').substr(userGhostId.length - 12) : ''}
                                      ${enemyWon ? 'was defeated' : 'has won'}
                                      against
                                      ${enemyGhostId ? (enemyGhostId + '').substr(enemyGhostId.length - 12) : ''}
                                    `}
                                  </p>
                                  <br />
                                </div>
                              )
                            })
                          : (
                              <p className={styles.battleLogText}>No history found</p>  
                            )
                        }
                      </div>
                    </>
                  ) : (
                    /* IN-BATTLE LOGS */
                    <>
                      <div className={styles.battleLog}>
                        {
                          loading.state
                          ? <p>Loading...</p>
                          : (
                              isAnimationPlaying || animationBattleLogs.length
                              ? animationBattleLogs.map((log, idx) => (
                                  <p key={idx} className={styles.battleLogText}>
                                    {log}
                                  </p>
                                ))
                              : charData?.character_life <= 0
                              ? <p className={styles.battleLogText}>Your ghost has been already eliminated or withdrawn...</p>
                              : charData?.battle_count === charData?.battle_limit
                              ? <p className={styles.battleLogText}>Your ghost has already reached its battle limit please withdraw and summon again</p>
                              : (
                                  <>
                                    {noOpponentFound && <p className={styles.battleLogText}>No opponent found.</p>}
                                    {noOpponentFound ? (
                                      <p className={styles.battleLogText}>Finding next opponent...</p>
                                    ) : (
                                      <p className={styles.battleLogText}>We're looking for an opponent...</p>
                                    )}
                                    {
                                      timerText && (
                                        <p className={styles.battleLogText}>
                                          {timerText}
                                        </p>
                                      )
                                    }
                                  </>
                                )
                            )
                        }
                        {
                          isAnimationPlaying && (
                            <p className={styles.cursorAnimation}></p>
                          )
                        }
                        {
                           isBattleDone && ( timerText && (
                            <p className={`${styles.battleLogText} mt-4`}>
                              {noOpponentFound && <p>No opponent found...</p>}
                              {timerText}
                            </p>
                          ))
                        }
                        {/* THIS IS FOR BATTLE LOGS SCROLL DOWN ANIMATION */}
                        <div id="scrollBtm" ref={battleLogsRef} />
                      </div>
                    </>
                  )
                ) : (
                  /******** BATTLE-END LOGS ********/
                  <>
                    <div className={styles.battleLog}>
                      {
                        ghostHistory ? ghostHistory.map((history, idx) => {
                          const enemyWon = history?.winner !== user_game_id
                          const enemyGhostId = enemyWon ? history?.winnerID : history?.loserID
                          const charGhostId = enemyWon ? history?.loserID : history?.winnerID

                          const charGhostExtractedId = charGhostId ? (charGhostId + '').substr(charGhostId.length - 12) : `Your character`
                          const enemyGhostExtractedId = enemyGhostId ? (enemyGhostId + '').substr(enemyGhostId.length - 12) : 'the enemy'

                          const date = UnixMicroToDate((+history?.timeExecuted), "MM/DD/YYYY hh:mm:ss A ", null)
                          let _resultText = enemyWon === false ? 'has won against' : 'was defeated against'
                          // const logs = history?.logs?.map((DATA, idx) => {
                          //   const battle_log = `Round ${DATA.round} : Character of ${DATA.defender} took ${DATA.damage} from character of ${DATA.attacker}`
                          //   return (
                          //     <p key={idx}>
                          //       {battle_log}
                          //     </p>
                          //   )
                          // })

                          const battleResult = <p className={styles.battleLogText}>{`Battle Outcome : ${charGhostExtractedId} ${_resultText} ${enemyGhostExtractedId}`}</p>
                          return (
                            <div key={idx}>
                              <p className={styles.battleLogText}>Match date: {date}</p>
                              {/* {logs} */}
                              {battleResult}
                              <br />
                            </div>
                          )
                        }) : enemyCharData === null ? (
                          <p>Can't retrieve data for this character, please try again</p>
                        ) : (
                          <p>Can't retrieve data for this character, please try again</p>
                        )
                      }
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </div>
        {/* BATTLE AND GHOST HISTORY LOGS (END) */}
        <div className={styles.btnContainer}>
          <img src={BtnBack} alt="Back" className={`${styles.btnBack} hover-cursor`} onClick={() => goBackHandler()} />
          <img src={BtnRules} alt="Rules" className={`${styles.btnRules} ${isAnimationPlaying ? styles.disabledBtn : 'hover-cursor'}`}
            onClick={() => {
              if (isAnimationPlaying) return
              if (
                summonState ||
                modalErrorState ||
                modalBattleLimit ||
                depositConfirmationState ||
                depositSuccessfulState ||
                withdrawalConfirmationState ||
                WithdrawalSuccessfulState
              ) return
              showRules(true)
            }}
          />
          {
            isAnimationPlaying && (
              <button className={styles.btnSkip} onClick={() => skipBattleAnimationHandler()}>
                Skip
              </button>
            )
          }  
        </div>
        <div className={styles.main_container_btm_overlay} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ ghost_quest, platform }) => ({ ghost_quest, platform });
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(GhostQuestGameplay);
