abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getTimeline(): void;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getTimeline(): void {
    console.log("The timeline is ...");
  }
}

const iv = new Instagram("test", "test", 3);
