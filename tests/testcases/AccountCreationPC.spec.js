import{test, expect,} from '@playwright/test';
import { PC_Login } from '../../POM/PolicyCenter/PC_Login';
import { Account_Creation_PC } from '../../POM/PolicyCenter/Account_Creation_PC';

test('Account Creation PC',async({page})=>{

const login = new PC_Login(page);
const acc=new Account_Creation_PC(page);
await login.lunchURL('http://192.168.99.145:8180/pc/PolicyCenter.do');
await page.waitForTimeout(2000);
await login.login('exp_test','exp_test');
await page.waitForTimeout(3000);
await acc.accountCreationPC();

})