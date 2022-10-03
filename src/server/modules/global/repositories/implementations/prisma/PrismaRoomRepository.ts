import { prisma, PrismaClient } from '@prisma/client'
import { IRoom } from 'server/modules/global/models/IRoom'
import { IUser } from 'server/modules/global/models/IUser'
import { inject, injectable } from 'tsyringe'
import { IRoomRepository, TCreateRoomData, TPassTurnData, TUpdateRoomData } from '../../IRoomRepository'


@injectable()
export class PrismaRoomRepository implements IRoomRepository {
  constructor(
    @inject('PrismaClient')
    private readonly client: PrismaClient,
  ) { 
  }

  async create(data: TCreateRoomData): Promise<IRoom> {
       
    var random = Math.floor(Math.random()*12)+1
    const companies = await this.client.room.create({
      data: {
        initialMonth: random,
        activeUserId: data.slot1Id,
        activeUserName: data.slot1Name,
        status: data.status,
        code: data.code,
        slot1Name: data.slot1Name,
        slot2Name: data.slot2Name,
        slot3Name: data.slot3Name,
        slot4Name: data.slot4Name,
        slot5Name: data.slot5Name,
        slot6Name: data.slot6Name,
        slot7Name: data.slot7Name,
        slot8Name: data.slot8Name,
        slot1Id: data.slot1Id,
        slot2Id: data.slot2Id,
        slot3Id: data.slot3Id,
        slot4Id: data.slot4Id,
        slot5Id: data.slot5Id,
        slot6Id: data.slot6Id,
        slot7Id: data.slot7Id,
        slot8Id: data.slot8Id,
        
      }
    })
    
    return companies
  }

  async update(data: TUpdateRoomData): Promise<IRoom | null> {
   
    const Room = await this.client.room.updateMany({
      
      data: {
        usedSlots: data.usedSlots,
        activeUserSlot: data.activeUserSlot,
        status: data.status,
        activeUserId: data.activeUserId,
        slot1Name: data.slot1Name,
        slot2Name: data.slot2Name,
        slot3Name: data.slot3Name,
        slot4Name: data.slot4Name,
        slot5Name: data.slot5Name,
        slot6Name: data.slot6Name,
        slot7Name: data.slot7Name,
        slot8Name: data.slot8Name,
        slot1Id: data.slot1Id,
        slot2Id: data.slot2Id,
        slot3Id: data.slot3Id,
        slot4Id: data.slot4Id,
        slot5Id: data.slot5Id,
        slot6Id: data.slot6Id,
        slot7Id: data.slot7Id,
        slot8Id: data.slot8Id,
      },
    })
    return null
  }

  async enterRoom(): Promise<IRoom | null> {       
    const room = await this.client.room.findFirst()   
    if (room && room.usedSlots <= 7) {
      await this.client.room.updateMany({     
        data: {
          usedSlots: {
            increment: 1,
          },          
        },
      })
     
       return room    
    }

    if (room && room.usedSlots == 8) {
      return null
    }

    if (room && room.usedSlots > 8) {
      await this.client.room.updateMany({     
        data: {
          usedSlots: {
            increment: 8,
          },         
        },
      })
      return null
    }
    return null
  }

  ///////////////////////// LEAVE ROOM ////////////////////////////////////////////////////////////////////////////
  ///////////////////////// LEAVE ROOM ////////////////////////////////////////////////////////////////////////////
  ///////////////////////// LEAVE ROOM ////////////////////////////////////////////////////////////////////////////

  async leaveRoom (data: {userId: number}): Promise<IUser | null> {
    const room = await this.client.room.findFirst()

    const user = await this.client.user.findFirst({
      where: {
        userId: data.userId
      }
    })

    var hold 

    if (room?.slot1Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot1Id: 0,
          slot1Name: 'default_blank_name'         
        },
      }) 
    }

    if (room?.slot2Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot2Id: 0,
          slot2Name: 'default_blank_name'         
        },
      }) 
    }

    if (room?.slot3Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot3Id: 0,
          slot3Name: 'default_blank_name'         
        },
      }) 
    }

    if (room?.slot4Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot4Id: 0,
          slot4Name: 'default_blank_name'         
        },
      }) 
    }

    if (room?.slot5Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot5Id: 0,
          slot5Name: 'default_blank_name'         
        },
      }) 
    }

    if (room?.slot6Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot6Id: 0,
          slot6Name: 'default_blank_name'         
        },
      }) 
    }

    if (room?.slot7Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot7Id: 0,
          slot7Name: 'default_blank_name'         
        },
      }) 
    }

    if (room?.slot8Id == data.userId) {
      hold = await this.client.room.updateMany({     
        data: {
          slot8Id: 0,
          slot8Name: 'default_blank_name'         
        },
      }) 
    }

    hold = await this.client.room.updateMany({     
      data: {
        usedSlots: {
          decrement: 1,
        },          
      },
    })     
 
    if (data.userId == room?.activeUserId) {
      this.passTurn({userId: data.userId})
    }
    return null
  }


  async reArrangeRoom(): Promise<void> {
       ////////////// re-arrange room slots /////////////////
        const room = await this.client.room.findFirst()   
       

       if (room?.slot1Id == 0) {
         await this.client.room.updateMany({     
           data: {
             slot1Id: room.slot2Id,
             slot1Name: room.slot2Name,
             slot2Id: room.slot3Id,
             slot2Name: room.slot3Name, 
             slot3Id: room.slot4Id,
             slot3Name: room.slot4Name, 
             slot4Id: room.slot5Id,
             slot4Name: room.slot5Name, 
             slot5Id: room.slot6Id,
             slot5Name: room.slot6Name, 
             slot6Id: room.slot7Id,
             slot6Name: room.slot7Name, 
             slot7Id: room.slot8Id,
             slot7Name: room.slot8Name,
             slot8Id: room.slot1Id,
             slot8Name: room.slot1Name,           
           },
         })
         
         return          
       } 
   
       if (room?.slot2Id == 0) {
         console.log('entered here')
         await this.client.room.updateMany({     
           data: {
             slot2Id: room.slot3Id,
             slot2Name: room.slot3Name, 
             slot3Id: room.slot4Id,
             slot3Name: room.slot4Name, 
             slot4Id: room.slot5Id,
             slot4Name: room.slot5Name, 
             slot5Id: room.slot6Id,
             slot5Name: room.slot6Name, 
             slot6Id: room.slot7Id,
             slot6Name: room.slot7Name, 
             slot7Id: room.slot8Id,
             slot7Name: room.slot8Name,
             slot8Id: room.slot2Id,
             slot8Name: room.slot2Name,           
           },
         })
        
         return          
       }
   
       if (room?.slot3Id == 0) {
         await this.client.room.updateMany({     
           data: { 
             slot3Id: room.slot4Id,
             slot3Name: room.slot4Name, 
             slot4Id: room.slot5Id,
             slot4Name: room.slot5Name, 
             slot5Id: room.slot6Id,
             slot5Name: room.slot6Name, 
             slot6Id: room.slot7Id,
             slot6Name: room.slot7Name, 
             slot7Id: room.slot8Id,
             slot7Name: room.slot8Name,
             slot8Id: room.slot3Id,
             slot8Name: room.slot3Name,           
           },
         })
        
         return         
       }
   
       if (room?.slot4Id == 0) {
         await this.client.room.updateMany({     
           data: { 
             slot4Id: room.slot5Id,
             slot4Name: room.slot5Name, 
             slot5Id: room.slot6Id,
             slot5Name: room.slot6Name, 
             slot6Id: room.slot7Id,
             slot6Name: room.slot7Name, 
             slot7Id: room.slot8Id,
             slot7Name: room.slot8Name,
             slot8Id: room.slot4Id,
             slot8Name: room.slot4Name,           
           },
         })
        
         return         
       }

  }


  async fixRoomActiveUserSlot() {

    console.log('fixing')

    const room = await this.client.room.findFirst()

    await this.client.room.updateMany(
      {
        data: {
          activeUserSlot:{
            decrement: 1
          }
        }
      }
    )

    if (room?.activeUserSlot && room?.activeUserSlot <= 0) {
      await this.client.room.updateMany(
        {
          data: {
            activeUserSlot: 1
          }
        }
      )
    }
    
    return

  }








///////////////////////// PASS TURN ////////////////////////////////////////////////////////////////////////////
///////////////////////// PASS TURN ////////////////////////////////////////////////////////////////////////////
///////////////////////// PASS TURN ////////////////////////////////////////////////////////////////////////////


  async passTurn(data: TPassTurnData): Promise<IRoom | null> {
    const room = await this.client.room.findFirst()
    if (room && data.userId == room.activeUserId){
      await this.client.room.updateMany({     
        data: {
          activeUserSlot: {
            increment: 1,
          },          
        },
      })
      
      if (room.activeUserSlot == room.usedSlots) {
        await this.client.room.updateMany({     
          data: {
            activeUserSlot: 1        
          },
        })

        await this.client.room.updateMany({     
          data: {
            activeUserId: room.slot1Id,
            activeUserName: room.slot1Name      
          },
        })

        await this.client.room.updateMany({     
          data: {
            currentTurn: {
              increment: 1,
            },          
          },
        })

        await this.client.user.updateMany(
          {
            data: {
              actions: 2
            }
          }
        )

        return room
      }

      console.log(room.activeUserSlot)

      switch (room.activeUserSlot) {
        case 1:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot2Id,
              activeUserName: room.slot2Name        
            },
          })
          break;
        case 2:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot3Id,
              activeUserName: room.slot3Name 
                     
            },
          })
          break;
        case 3:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot4Id,
              activeUserName: room.slot4Name        
            },
          })
          break;
        case 4:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot5Id,
              activeUserName: room.slot5Name        
            },
          })
          break;
        case 5:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot6Id,
              activeUserName: room.slot6Name        
            },
          })
          break;
        case 6:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot7Id,
              activeUserName: room.slot7Name        
            },
          })
          break;
        case 7:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot8Id,
              activeUserName: room.slot8Name        
            },
          })
          break;
        case 8:
          await this.client.room.updateMany({     
            data: {
              activeUserId: room.slot1Id,
              activeUserName: room.slot1Name        
            },
          })
          break;          
      }
      await this.client.user.updateMany(
        {
          data: {
            actions: 2
          }
        }
      )
      
      if (room.activeUserId == 0) {this.passTurn({userId: 0})}

      return room
    }  
    
    return null
  }

  async findMany(): Promise<IRoom[]> {
    return await this.client.room.findMany({
     
    })
  } 

  async findByCode(data: { code: number }): Promise<IRoom | null> {
    const Room = await this.client.room.findFirst({
      where: {
        OR: [{ code: data.code } ],
      },
    })

    if (!Room) return null

    return Room
  }

  async findById(data: { id: number }): Promise<IRoom | null> {
    const Room = await this.client.room.findFirst({
      where: {
        OR: [{ id: data.id } ],
      },
    })

    if (!Room) return null

    return Room
  }

  async findOne(data: { id: number, code: number }): Promise<IRoom | null> {
    const Room = await this.client.room.findFirst({
      where: {
        AND: [{ id: data.id },{ code: data.code } ],
      },
    })

    if (!Room) return null

    return Room
  }



  async delete(data: { code: number }): Promise<IRoom | null> {
    const Room = await this.client.room.findFirst({
      where: { code: data.code },
    })

    if (!Room) return null

    await this.client.room.deleteMany({
      where: {
        code: {
        },
      },
    })
    return null
  }
  async deleteAll(): Promise<void> {   
    await this.client.room.deleteMany({
      where: {
      },
    })
  }
}
