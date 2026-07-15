// Custom actions for the CareShare demo (SweetAlert2 popups after demo logins).
export default {
  async dismissAlert(page) {
    const confirm = page.locator(".swal2-confirm");
    for (let i = 0; i < 10; i++) {
      if (await confirm.isVisible().catch(() => false)) break;
      await page.waitForTimeout(500);
    }
    if (await confirm.isVisible().catch(() => false)) {
      await confirm.click().catch(() => {});
      await page.waitForTimeout(600);
    }
    await page.keyboard.press("Escape").catch(() => {});
    await page
      .locator(".swal2-container")
      .waitFor({ state: "hidden", timeout: 5000 })
      .catch(() => {});
  },
};
