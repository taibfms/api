import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    Param,
    Put,
  } from '@nestjs/common';
  import { yupCreateTimeInput, yupUpdateTimeAmountInput } from 'src/yup/times';
  import { TimeService } from './times.service';
  import { CreateTimeInput, UpdateTimeAmountInput } from './dto/time';
  
  @Controller()
  export class TimeController {
    constructor(private readonly timeService: TimeService) {}
  
    @Post('/times')
    async createTime(@Body() input: CreateTimeInput) {

      const isValidInput = yupCreateTimeInput.isValidSync(input);
  
      if (!isValidInput) throw new BadRequestException('Seu input está inválido');
  
      return this.timeService.createTime(input);
    }

    @Get('/times')
  async getTimes() {
    return this.timeService.getTimes();
  }

  @Put('/times/amount/:id')
  async updateTimeAmount(
    @Body() input: UpdateTimeAmountInput,
    @Param() params,
  ){
    const isValidInput = yupUpdateTimeAmountInput.isValidSync(input);
    if (!isValidInput)
    throw new BadRequestException('O campo amount é requerido.');
    return this.timeService.updateTimeAmount(input.amount, params.id)

  }
  }
  