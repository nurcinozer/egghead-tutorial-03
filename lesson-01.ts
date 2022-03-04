// Improve Readability with TypeScript Numeric Separators when working with Large Numbers

// When looking at large numbers in code (such as 1800000) it’s oftentimes difficult for the human eye to quickly see how big the number actually is. TypeScript allows us to use numeric separators to write numbers in a more human readable format (such as 1_800_000), while keeping the generated JavaScript unchanged.

class AmountInput {
  private static MAX_ALLOWED = 99_999_999;

  amount: number = 0;

  showTooltip() {
    //show tooltip
    setTimeout(() => {
      //hide tooltip
    }, 2_500);
  }

  formatMillion() {
    return this.amount / 1_000_000 + "M";
  }
}
