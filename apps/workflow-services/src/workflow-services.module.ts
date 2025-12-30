import { Module } from '@nestjs/common';
import { WorkflowServicesController } from './workflow-services.controller';
import { WorkflowServicesService } from './workflow-services.service';
import { WorkflowsModule } from './workflows/workflows.module';

@Module({
  imports: [WorkflowsModule],
  controllers: [WorkflowServicesController],
  providers: [WorkflowServicesService],
})
export class WorkflowServicesModule {}
