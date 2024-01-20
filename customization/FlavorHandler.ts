class FlavorHandler extends CustomizationHandler {
  handleRequest(customization: string): void {
    if (customization === "Flavor") {
      console.log("Adding flavor...");
    } else {
      super.handleRequest(customization);
    }
  }
}
