import{test, expect} from '@playwright/test';
import { PC_Login } from '../../POM/PolicyCenter/PC_Login';


test('Login PC',async({page})=>{

    const login = new PC_Login(page);
    await login.lunchURL('http://192.168.99.145:8180/pc/PolicyCenter.do');
    await page.waitForTimeout(2000);
    await login.login('exp_test','exp_test');
//     await lunchURL('http://192.168.99.145:8180/pc/PolicyCenter.do');
//   //  await login.page.goto('http://192.168.99.145:8180/pc/PolicyCenter.do');
//    await setText(login.userName,'exp_test');
//     //await login.page.locator(login.userName).fill('exp_test');       
//     await login.page.locator(login.password).fill('exp_test');
//     await login.page.locator(login.loginBtn).click();

    
    })

  



