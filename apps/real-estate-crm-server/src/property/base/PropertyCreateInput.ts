/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsInt,
  IsEnum,
  ValidateNested,
} from "class-validator";

import { EnumPropertyTypeField } from "./EnumPropertyTypeField";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { Type } from "class-transformer";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

@InputType()
class PropertyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  size?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyTypeField,
  })
  @IsEnum(EnumPropertyTypeField)
  @IsOptional()
  @Field(() => EnumPropertyTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => AgentAssignmentCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AgentAssignmentCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AgentAssignmentCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
}

export { PropertyCreateInput as PropertyCreateInput };
