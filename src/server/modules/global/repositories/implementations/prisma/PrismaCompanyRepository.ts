import { prisma, PrismaClient } from '@prisma/client'
import { ICompany } from 'server/modules/global/models/ICompany'
import { inject, injectable } from 'tsyringe'
import { basicMaterials, blueprints } from '../../Blueprints'
import { ICompanyRepository } from '../../ICompanyRepository'
import {
  TCreateCompanyData,
} from '../../ICompanyRepository'

@injectable()
export class PrismaCompanyRepository implements ICompanyRepository {
  constructor(
    @inject('PrismaClient')
    private readonly client: PrismaClient,
  ) { 
  }

  async create(data: {code: number;}): Promise<ICompany[]> {
    
    let codeArray: Array<number>;
    codeArray = [1, 4, 2, 8, 5, 7, 3, 6,     8, 3, 7, 1, 5, 2, 6, 4,     2, 4, 3, 1, 5, 8, 6, 7,
     5, 4, 7, 2, 8, 1, 3, 4,     5, 2, 7, 1, 8, 6, 3, 4,              
    ];

    let indexArray: Array<number>;
    indexArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                
    
    for (let i = 1; i < 30; i++) {
    
      var index = (data.code * i) + (i * 2) - (i*i)
      while (index > 39) {
        index = index - (i *4)
      }

      if (index < 0) index = index * (-1)
      while (index > 39) {
        index = index / 2
      }
       index = Math.round(index)    
      
      indexArray[i] = codeArray[index]
    }
    

    const companies = await this.client.company.createMany({
      data: [
        { name: 'fazenda de cevada', slot1: basicMaterials[indexArray[0]], slot2: basicMaterials[indexArray[1]] },
        { name: 'fazenda de trigo', slot1: basicMaterials[indexArray[2]], slot2: basicMaterials[indexArray[3]]},
        { name: 'fazenda de linho', slot1: basicMaterials[indexArray[4]], slot2: basicMaterials[indexArray[5]] },
        { name: 'fazenda de uva', slot1: basicMaterials[indexArray[6]], slot2: basicMaterials[indexArray[7]]},
        { name: 'fazenda de ovelhas', slot1: basicMaterials[indexArray[8]], slot2: basicMaterials[indexArray[15]]},
        { name: 'fazenda de galinhas', slot1: basicMaterials[indexArray[10]], slot2: basicMaterials[indexArray[11]]},
        { name: 'fazenda de porcos', slot1: basicMaterials[indexArray[10]], slot2: basicMaterials[indexArray[13]]},      
        { name: 'fazenda de vacas', slot1: basicMaterials[indexArray[14]], slot2: basicMaterials[indexArray[15]]},
        { name: 'fazenda de cana de açucar', slot1: basicMaterials[indexArray[16]], slot2: basicMaterials[indexArray[17]]},
        { name: 'fazenda de aboboras', slot1: basicMaterials[indexArray[18]], slot2: basicMaterials[indexArray[19]]},
        { name: 'lenharia', slot1: basicMaterials[indexArray[20]], slot2: basicMaterials[indexArray[21]]},
        { name: 'serraria', slot1: basicMaterials[indexArray[22]], slot2: basicMaterials[indexArray[23]]},
        { name: 'carpintaria', slot1: basicMaterials[indexArray[24]], slot2: basicMaterials[indexArray[25]]},
        { name: 'pedreira', slot1: basicMaterials[indexArray[26]], slot2: basicMaterials[indexArray[27]]},
        { name: 'mina de ferro', slot1: basicMaterials[indexArray[28]], slot2: basicMaterials[indexArray[29]]},
        { name: 'mina de carvao', slot1: basicMaterials[indexArray[1]], slot2: basicMaterials[indexArray[3]]},
        { name: 'mina de diamante', slot1: basicMaterials[indexArray[30]], slot2: basicMaterials[indexArray[31]]},
        { name: 'mina de ouro', slot1: basicMaterials[indexArray[32]], slot2: basicMaterials[indexArray[33]]},
        { name: 'mina de silica', slot1: basicMaterials[indexArray[34]], slot2: basicMaterials[indexArray[35]]},
        { name: 'metalurgica', slot1: basicMaterials[indexArray[36]], slot2: basicMaterials[indexArray[37]]},
        { name: 'ferreiro', slot1: basicMaterials[indexArray[38]], slot2: basicMaterials[indexArray[1]]},
        { name: 'vidraceiro', slot1: basicMaterials[indexArray[25]], slot2: basicMaterials[indexArray[3]]},
        { name: 'alfaiate', slot1: basicMaterials[indexArray[14]], slot2: basicMaterials[indexArray[6]]},
        { name: 'joalheiro', slot1: basicMaterials[indexArray[33]], slot2: basicMaterials[indexArray[22]]},
        { name: 'pesqueiro', slot1: basicMaterials[indexArray[16]], slot2: basicMaterials[indexArray[6]]},
        { name: 'destilaria', slot1: basicMaterials[indexArray[29]], slot2: basicMaterials[indexArray[35]]},
        { name: 'casa de bebida', slot1: basicMaterials[indexArray[1]], slot2: basicMaterials[indexArray[12]]},
        { name: 'moinho', slot1: basicMaterials[indexArray[22]], slot2: basicMaterials[indexArray[21]]},
        { name: 'padaria', slot1: basicMaterials[indexArray[4]], slot2: basicMaterials[indexArray[31]]},
        { name: 'fazenda de algodao', slot1: basicMaterials[indexArray[16]], slot2: basicMaterials[indexArray[8]]}
      ],
    })
    
    return companies[0]
  }

  async findMany(): Promise<ICompany[]> {
    return await this.client.company.findMany({
      where: {
        status: true,
      },
    })
  }

  async findManyDiscovered(data: {userId: number}): Promise<ICompany[]> {
    const companies = await this.client.company.findMany({
      where: {
        status: true
      },
    })

    const user = await this.client.user.findFirst(
      {
        where: {
          userId: data.userId
        }
      }
    )

    


    if (user) {
      if (user.BPD1 == false) {
        delete companies[0] 
      }
      if (user.BPD2 == false) {
        delete companies[1] 
      }
      if (user.BPD3 == false) {
        delete companies[2] 
      }
      if (user.BPD4 == false) {
        delete companies[3] 
      }
      if (user.BPD5 == false) {
        delete companies[4] 
      }
      if (user.BPD6 == false) {
        delete companies[5] 
      }
      if (user.BPD7 == false) {
        delete companies[6] 
      }
      if (user.BPD8 == false) {
        delete companies[7] 
      }
      if (user.BPD9 == false) {
        delete companies[8] 
      }
      if (user.BPD10 == false) {
        delete companies[9] 
      }
      if (user.BPD11 == false) {
        delete companies[10] 
      }
      if (user.BPD12 == false) {
        delete companies[11] 
      }
      if (user.BPD13 == false) {
        delete companies[12] 
      }
      if (user.BPD14 == false) {
        delete companies[13] 
      }
      if (user.BPD15 == false) {
        delete companies[14] 
      }
      if (user.BPD16 == false) {
        delete companies[15] 
      }
      if (user.BPD17 == false) {
        delete companies[16] 
      }
      if (user.BPD18 == false) {
        delete companies[17] 
      }
      if (user.BPD19 == false) {
        delete companies[18] 
      }
      if (user.BPD20 == false) {
        delete companies[19] 
      }

      if (user.BPD21 == false) {
        delete companies[20] 
      }
      if (user.BPD22 == false) {
        delete companies[21] 
      }
      if (user.BPD23 == false) {
        delete companies[22] 
      }
      if (user.BPD24 == false) {
        delete companies[23] 
      }
      if (user.BPD25 == false) {
        
        delete companies[24] 
      }
      if (user.BPD26 == false) {
        delete companies[25] 
      }
      if (user.BPD27 == false) {
        delete companies[26] 
      }
      if (user.BPD28 == false) {
        delete companies[27] 
      }
      if (user.BPD29 == false) {
        delete companies[28] 
      }
      if (user.BPD30 == false) {
        delete companies[29] 
      }
    }
    
    if(!user) console.log('no user')   

    return companies
  }

  

  async findPartials(data: { slot1: string, slot2: string }): Promise<ICompany[] | null> {
    const companies = await this.client.company.findMany({
      where: {
        OR: [{ slot1: data.slot1 }, { slot2: data.slot2 }, { slot1: data.slot2 }, { slot2: data.slot1 } ],        
      },
    })    
    if (!companies) return null 
    return companies
  }


  async findOne(data: { slot1: string, slot2: string }): Promise<ICompany[] | null> {
    if (data.slot1 == undefined || data.slot2 == undefined) return null  
    
      const company = await this.client.company.findMany({
      where: {
        OR: [{AND: [{ slot1: data.slot1 }, { slot2: data.slot2 }],}, 
             {AND: [{ slot2: data.slot1 }, { slot1: data.slot2 }],},]
      },
    })
    
    if (company == null) return null
   
    return company
  }

  async findByName(data: { name: string }): Promise<ICompany | null> {
    const company = await this.client.company.findFirst({
      where: {
        OR: [{ name: data.name } ],
      },
    })

    if (!company) return null

    return company
  }

  async findById(data: { id: number }): Promise<ICompany | null> {
    const company = await this.client.company.findFirst({
      where: {
        OR: [{ id: data.id } ],
      },
    })

    if (!company) return null

    return company
  }



  async delete(data: { name: string }): Promise<ICompany | null> {
    const company = await this.client.company.findFirst({
      where: { name: data.name },
    })

    if (!company) return null

    await this.client.company.deleteMany({
      where: {
        name: {
          contains: data.name,
        },
      },
    })

    return null

  }

  async deleteAll(): Promise<ICompany | null> {   
    await this.client.company.deleteMany({
      where: {
        status: true
      },
    })
    return null
  }

  async wipeAllData(): Promise<ICompany | null> {   
    await this.client.company.deleteMany()
    await this.client.room.deleteMany()
    await this.client.user.deleteMany()
    return null
  }

  async update(data: { slot1: string, slot2: string, userId: number }): Promise<ICompany | null> {
   
    const user = await this.client.user.updateMany(
      {
        where: {
          userId: data.userId

        },
        data: {
          actions: {
            decrement: 1,
          },
      }
    }
    )
    
    const companies = await this.client.company.findMany({
      where: {
        OR: [{AND: [{ slot1: data.slot1 }, { slot2: data.slot2 } ],}, 
             {AND: [{ slot2: data.slot1 }, { slot1: data.slot2 } ],},]
      },
    })
    if (!companies) return null
    
    
    const cos = await this.client.company.findMany({
      where: {
        slot1: {
          contains: data.slot1 
        },
        slot2: {
          contains: data.slot2 
        }              
      },      
    })
    
    const cos2 = await this.client.company.findMany({
      where: {
        slot1: {
          contains: data.slot2 
        },
        slot2: {
          contains: data.slot1 
        }              
      },      
    })
    
    const buildingArray = ['fazenda de cevada', 'fazenda de trigo', 'fazenda de linho', 'fazenda de uva',
  'fazenda de ovelhas', 'fazenda de galinhas', 'fazenda de porcos', 'fazenda de vacas', 'fazenda de cana de açucar',
'fazenda de abobora', 'lenharia', 'serraria','carpintaria', 'pedreira', 'mina de ferro', 'mina de carvao', 'mina de diamante',
'mina de ouro', 'mina de silica', 'metalurgica', 'ferreiro', 'vidraceiro', 'alfaiate', 'joalheiro', 'pesqueiro', 'destilaria',
'casa de bebida', 'moinho','padaria','fazenda de algodao']

 for (let i=0;i<=cos.length-1;i ++) {
    if (cos[i].name == buildingArray[0]) {
      await this.client.user.updateMany({
        where: {
          userId: data.userId                        
        },
        data: {
          BPD1: true
        }
      })       
    }
 }

 for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[1]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD2: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[2]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD3: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[3]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD4: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[4]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD5: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[5]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD6: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[6]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD7: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[7]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD8: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[8]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD9: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[9]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD10: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[10]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD11: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[11]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD12: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[12]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD13: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[13]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD14: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[14]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD15: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[15]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD16: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[16]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD17: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[17]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD18: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[18]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD19: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[19]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD20: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[20]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD21: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[21]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD22: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[22]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD23: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[23]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD24: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[24]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD25: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[25]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD26: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[26]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD27: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[27]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD28: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[28]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD29: true
      }
    })       
  }
}

for (let i=0;i<=cos.length-1;i ++) {
  if (cos[i].name == buildingArray[29]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD30: true
      }
    })       
  }
}

for (let i=0;i<=cos2.length-1;i ++) {
  if (cos2[i].name == buildingArray[0]) {
    await this.client.user.updateMany({
      where: {
        userId: data.userId                        
      },
      data: {
        BPD1: true
      }
    })       
  } 
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[1]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD2: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[2]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD3: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[3]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD4: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[4]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD5: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[5]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD6: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[6]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD7: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[7]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD8: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[8]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD9: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[9]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD10: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[10]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD11: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[11]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD12: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[12]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD13: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[13]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD14: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[14]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD15: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[15]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD16: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[16]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD17: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[17]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD18: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[18]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD19: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[19]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD20: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[20]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD21: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[21]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD22: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[22]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD23: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[23]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD24: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[24]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD25: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[25]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD26: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[26]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD27: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[27]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD28: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[28]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD29: true
    }
  })       
}
}

for (let i=0;i<=cos2.length-1;i ++) {
if (cos2[i].name == buildingArray[29]) {
  await this.client.user.updateMany({
    where: {
      userId: data.userId                        
    },
    data: {
      BPD30: true
    }
  })       
}
}

    await this.client.company.updateMany({
      where: {
        slot1: {
          contains: data.slot1 
        },
        slot2: {
          contains: data.slot2 
        }              
      },
      data: {
        discovered: true,
      },
    })







    await this.client.company.updateMany({
      where: {
        slot1: {
          contains: data.slot2 
        },
        slot2: {
          contains: data.slot1 
        }
      },
      data: {
        discovered: true,
      },
    })
  

    return null
  }
}
