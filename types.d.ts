declare global {
  interface Shopping {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    name: string;
    done: boolean;
    marked: boolean;
    creator: string;
    creatorId: string;
    order: number;
  }
}

export {};
