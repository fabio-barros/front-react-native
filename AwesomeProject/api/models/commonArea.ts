import { CommonAreaType } from "../enums/CommonAreaType";

export interface CommonArea {
    id: number;
    description: string;
    type: CommonAreaType;
    buildingId: string;
}
