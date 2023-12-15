exports.ReinstatePolicy =
class ReinstatePolicy {

    constructor(page){

        this.actions="//*[@id='PolicyFile:PolicyFileMenuActions-btnInnerEl']";
        this.reinstate_Policy="//*[@id='PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:PolicyFileMenuActions_ReinstatePolicy-textEl']";
        this.reason="//*[@id='ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:ReinstatePolicyDV:ReasonCode-inputEl']";
        this.reason_Description="//*[@id='ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:ReinstatePolicyDV:ReasonDescription-inputEl']";
        this.quote="//*[@id='ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl']";
        this.next="//*[@id='ReinstatementWizard:Next-btnInnerEl']";
        this.reinstateBtn="//*[@id='ReinstatementWizard:ReinstatementWizard_PaymentScreen:JobWizardBillingToolbarButtonSet:Reinstate-btnInnerEl']";
        this.warning_Message_Ok="//*[text()='OK']";
        this.tittle_Bar_Status="//*[@id='JobComplete:JobCompleteScreen:ttlBar']";
        this.view_Your_Policy="//*[@id='JobComplete:JobCompleteScreen:JobCompleteDV:ViewPolicy-inputEl']";
        this.policy_Number="//*[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_PolicyDV:PolicyNumber-inputEl']";
        this.policy_Transactions="//*[@id='PolicyFile:MenuLinks:PolicyFile_PolicyFile_Jobs']";
        this.policy_Current_Status="//div[@id='PolicyFile_Jobs/DetailsTitleCard']//table//table[1]//tr//td[5]//div";

    }


}