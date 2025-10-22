import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MessageEntity } from './enity/message.entity';
import { SendMessageDto } from './dto/send-message.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}

  async sendMessage(dto: SendMessageDto) {
    const { text } = dto;

    const message = this.messageRepository.create({
      text,
    });

    await this.messageRepository.save(message);

    return message;
  }
}
