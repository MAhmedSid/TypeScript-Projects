#! /usr/bin/env node
import login from "./atm_modules/login.js";
import transactionTypeRecruiter from "./atm_modules/trasactiontype.js";
(async function atm() {
    let current_Balance = Math.floor(Math.random() * 2000);
    await login(current_Balance);
    await setTimeout(() => {
        transactionTypeRecruiter(current_Balance);
    }, 6000);
})();
