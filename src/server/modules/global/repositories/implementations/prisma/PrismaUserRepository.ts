import { prisma, PrismaClient } from '@prisma/client'
import { IUser } from 'server/modules/global/models/IUser'
import { inject, injectable } from 'tsyringe'
import { IUserRepository, TSubActionUserData, TUpdateUserData } from '../../IUserRepository'


@injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(
    @inject('PrismaClient')
    private readonly client: PrismaClient,
  ) { 
  }

  async create(data: {name: string, roomId: number, userId:number}): Promise<IUser> {
       

    const companies = await this.client.user.create({
      data: {
        name: data.name,
        roomId: data.roomId,
        userId: data.userId
      }
    })
    
    return companies
  }

  async findMany(): Promise<IUser[]> {
    return await this.client.user.findMany({
      where: {
        status: true,
      },
    })
  } 

  async findByName(data: { name: string }): Promise<IUser | null> {
    const user = await this.client.user.findFirst({
      where: {
        OR: [{ name: data.name } ],
      },
    })

    if (!user) return null

    return user
  }

  async findById(data: { userId: number }): Promise<IUser | null> {
    const user = await this.client.user.findFirst({
      where: {
        OR: [{ userId: data.userId } ],
      },
    })

    if (!user) return null

    return user
  }



  async delete(data: { name: string }): Promise<IUser | null> {
    const user = await this.client.user.findFirst({
      where: { name: data.name },
    })

    if (!user) return null

    await this.client.user.deleteMany({
      where: {
        name: {
          contains: data.name,
        },
      },
    })

    return null

  }

  async deleteAll(): Promise<null> {
   


    await this.client.user.deleteMany({
      where: {
        status: true
      },
    })

    return null

  }

  async subAction(data: TSubActionUserData): Promise<IUser | null> {
    const user = await this.client.user.findFirst(
      {
        where: {
          userId: data.userId
        }
      } 
    )

    if (!user) {
      
      return null
    }

    await this.client.user.updateMany(
      {
        where: {
          userId: data.userId
        },
        data: {
          actions: {
            decrement: 1
          }
        }
      }
    )
   
    return user
    
  }

  async update(data: TUpdateUserData): Promise<IUser | null> {
    const userIdInt = Math.trunc(data.userId)
    const user = this.client.user.findFirst({
      where: {
         userId: userIdInt
      },
    })

    if (!user) return null 

    const updatedUser = await this.client.user.updateMany(
      {
        where: {
          userId: userIdInt
        },
        data: {
          location: data.location,
          actions: data.actions,
          roomId: data.roomId,
          BPD1: data.BPD1,
          BPD2: data.BPD2,
          BPD3: data.BPD3,
          BPD4: data.BPD4,
          BPD5: data.BPD5,
          BPD6: data.BPD6,
          BPD7: data.BPD7,
          BPD8: data.BPD8,
          BPD9: data.BPD9,
          BPD10: data.BPD10,
          BPD11: data.BPD11,
          BPD12: data.BPD12,
          BPD13: data.BPD13,
          BPD14: data.BPD14,
          BPD15: data.BPD15,
          BPD16: data.BPD16,
          BPD17: data.BPD17,
          BPD18: data.BPD18,
          BPD19: data.BPD19,
          BPD20: data.BPD20,
          BPD21: data.BPD21,
          BPD22: data.BPD22,
          BPD23: data.BPD23,
          BPD24: data.BPD24,
          BPD25: data.BPD25,
          BPD26: data.BPD26,
          BPD27: data.BPD27,
          BPD28: data.BPD28,
          BPD29: data.BPD29,
          BPD30: data.BPD30          
        }
      }
    )

 

    return updatedUser[0]
  }

  async setUserLocations(): Promise<IUser | null> {

    const c1 = 'black'
    const c2 = 'FireBrick'
    const c3 = 'Navy'
    const c4 = 'ForestGreen'
    const c5 = 'DeepPink'
    const c6 = 'DarkOrange'
    const c7 = 'Indigo'
    const c8 = 'DarkTurquoise'    

    const colors = [c1,c2,c3,c4,c5,c6,c7,c8]   
    
    const locations = ['imperio de tremecem','reino de aragon','imperio da franca', 'principado de moscow',
    'moldavia', 'ducado de atenas', 'imperio dos marmelucos', 'reino hungaro', 'reino da imericia', 'inglaterra',
    'reino da armenia']
    let locationArray = ['']
    let colorArray = ['']
    let numberArray = [0,1,2,3,4,5,6,7,8,9,10]
    let numberArray2 = [0,1,2,3,4,5,6,7]

    for (var i = 0; i<8; i++) {
      var index = Math.floor(Math.random() * (12-i)) 
      var index2 = Math.floor(Math.random() * (8-i)) 
      colorArray.push(colors[numberArray2[index2]]) 
      locationArray.push(locations[numberArray[index]])
      numberArray.splice(index, 1)    
      numberArray2.splice(index2, 1)      
    }
    
    const room = await this.client.room.findFirst({
      where: {
      },
    })
  
    if (!room) return null
  
    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot1Id
        },
        data: {
          location: locationArray[1],
          color: colorArray[1]                        
        }
      }
    )
   
    } catch{ }

    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot2Id
        },
        data: {
          location: locationArray[2],
          color: colorArray[2]                        
        }
      }
    )
    } catch{}

    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot3Id
        },
        data: {
          location: locationArray[3],
          color: colorArray[3]                         
        }
      }
    )
    } catch{}

    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot4Id
        },
        data: {
          location: locationArray[4],
          color: colorArray[4]                         
        }
      }
    )
    } catch{}

    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot5Id
        },
        data: {
          location: locationArray[5],
          color: colorArray[5]                         
        }
      }
    )
    } catch{}

    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot6Id
        },
        data: {
          location: locationArray[6],
          color: colorArray[6]                         
        }
      }
    )
    } catch{}

    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot7Id
        },
        data: {
          location: locationArray[7],
          color: colorArray[7]                         
        }
      }
    )
    } catch{}

    try {
      await this.client.user.updateMany(
      {
        where: {
          userId: room.slot8Id
        },
        data: {
          location: locationArray[8],
          color: colorArray[8]                         
        }
      }
    )
    } catch{}
  
  
    
    return null
  }

}



