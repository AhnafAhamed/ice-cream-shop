class ToppingHandler extends CustomizationHandler {
  handleRequest(customization: string): void {
    if (customization === "Topping") {
      console.log("Adding topping...");
    } else {
      super.handleRequest(customization);
    }
  }
}
