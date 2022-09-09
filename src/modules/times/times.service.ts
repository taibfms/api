import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException
  } from '@nestjs/common';
  import { CreateTimeInput, UpdateTimeAmountInput } from './dto/time';
  import { TimeRepository } from './repositories';
  
  @Injectable()
  export class TimeService {
    constructor(private readonly timeRepository: TimeRepository) {}

    async createTime(input: CreateTimeInput): Promise {
      const foundTimeByName = await this.timeRepository.findByUnique({
        name: input.team,
      });
      
      if (foundTimeByName)
        throw new ConflictException('Já existe um time com este nome');
  
      try {
        return this.timeRepository.create(input);
      } catch {
        throw new InternalServerErrorException();
      }
    }

    async getTimes(): Promise {
      try {
        return this.timeRepository.findAll();
      } catch {
        throw new InternalServerErrorException();
      }
    }

    async updateTimeAmount(newAmount: number, id: string ): Promise {
      const foundTimebyId = await this.timeRepository.findByUnique({id,})
      if (!foundTimebyId)
      throw new NotFoundException('Time não encontrado por Id');
      try {
        return this.timeRepository.update({amount: newAmount}, id);}catch{
          throw new InternalServerErrorException
        }
      }
    }
  

