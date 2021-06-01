export interface Hotel {
  id: number,
  type: string,
  hpic: string,
  detail: string
}

export interface Comment {
  id: number,
  content: string,
  reply?: string,
  createTime: string
}

export function fetchData() : void {
}