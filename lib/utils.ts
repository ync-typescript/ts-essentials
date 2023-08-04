
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function setTimeout(r: (value: unknown) => void, ms: number): void {
  throw new Error("Function not implemented.");
}

