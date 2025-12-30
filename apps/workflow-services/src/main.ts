import { NestFactory } from '@nestjs/core';
import { WorkflowServicesModule } from './workflow-services.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkflowServicesModule);
  await app.listen(3001);
  console.log('running on port 3001');
}

bootstrap();
