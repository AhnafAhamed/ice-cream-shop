abstract class CustomizationHandler {
  protected nextHandler: CustomizationHandler;

  setNextHandler(nextHandler: CustomizationHandler): void {
    this.nextHandler = nextHandler;
  }

  handleRequest(customization: string): void {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(customization);
    }
  }
}
