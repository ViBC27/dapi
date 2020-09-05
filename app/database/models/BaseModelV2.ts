import BaseModelV1 from './BaseModelV1';

class BaseModelV2 extends BaseModelV1 {
  createdAt: Date;
  updatedAt: Date;
  $beforeInsert(): void {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  $beforeUpdate(): void {
    this.updatedAt = new Date();
  }
}

export default BaseModelV2;
