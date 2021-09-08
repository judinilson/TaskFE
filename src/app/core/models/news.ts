export interface INews {
  "id": number,
  "title": string,
  "description": string,
  "pictureUrl": string | null,
  "content": string
}

export class News implements  INews{
  content: string = '';
  description: string= '';
  id: number = 0;
  pictureUrl: string | null = null;
  title: string = '';
}

