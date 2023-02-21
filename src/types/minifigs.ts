export interface minifigDataType {
  name: string;
  set_img_url: string;
  set_num: string;
  set_url: string;
}

export interface minifigPartDataType {
  id: number;
  part: {
    part_num: string;
    name: string;
    part_img_url: string;
  };
}
