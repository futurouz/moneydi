const validate = values => {
    const errors = {};

    // console.log('validate_values:', values);

    // // Account
    // if (!values.mobileNo) {
    //     errors.mobileNo = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.firstName) {
    //     errors.firstName = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.lastName) {
    //     errors.lastName = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.password) {
    //     errors.password = 'กรุณากรอกข้อมูล'
    // }
    //
    // // Personal
    // if (!values.citizenId) {
    //     errors.citizenId = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.age) {
    //     errors.age = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.address) {
    //     errors.address = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.province) {
    //     errors.province = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.addressAge) {
    //     errors.addressAge = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.mobileAge) {
    //     errors.mobileAge = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.lineId) {
    //     errors.lineId = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.email) {
    //     errors.email = 'กรุณากรอกข้อมูล'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'อีเมล์ไม่ถูกต้อง'
    // }
    // if (!values.homeType) {
    //     errors.homeType = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.homeStatus) {
    //     errors.homeStatus = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.education) {
    //     errors.education = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.marriageStatus) {
    //     errors.marriageStatus = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.hasMobileBanking) {
    //     errors.hasMobileBanking = 'กรุณากรอกข้อมูล'
    // }
    //
    // if (!values.contactFirstName) {
    //     errors.contactFirstName = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.contactLastName) {
    //     errors.contactLastName = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.contactMobile) {
    //     errors.contactMobile = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.relation) {
    //     errors.relation = 'กรุณากรอกข้อมูล'
    // }
    //
    // if (!values.work) {
    //     errors.work = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.workStatus) {
    //     errors.workStatus = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.workName) {
    //     errors.workName = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.workAddress) {
    //     errors.workAddress = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.workMobile) {
    //     errors.workMobile = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.amountOfEmployee) {
    //     errors.amountOfEmployee = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.workAge) {
    //     errors.workAge = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.workPosition) {
    //     errors.workPosition = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.workDepartment) {
    //     errors.workDepartment = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.income) {
    //     errors.income = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.salaryMethod) {
    //     errors.salaryMethod = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.getSalaryTimes) {
    //     errors.getSalaryTimes = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.getSalaryDate) {
    //     errors.getSalaryDate = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.cashCard) {
    //     errors.cashCard = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.loanTimeIn2Month) {
    //     errors.loanTimeIn2Month = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.withdrawAfterSalary) {
    //     errors.withdrawAfterSalary = 'กรุณากรอกข้อมูล'
    // }
    //
    // // Loan
    // if (!values.objective) {
    //     errors.objective = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.needLoan) {
    //     errors.needLoan = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.minimumLoan) {
    //     errors.minimumLoan = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.transferMethod) {
    //     errors.transferMethod = 'กรุณากรอกข้อมูล'
    // } else {
    //     switch(values.transferMethod) {
    //         case 'prompt_pay':
    //             if (!values.promptPayAccountNo) {
    //                 errors.promptPayAccountNo = 'กรุณากรอกข้อมูล'
    //             }
    //             break;
    //
    //         case 'bank_transfer':
    //             if (!values.bankName) {
    //                 errors.bankName = 'กรุณากรอกข้อมูล'
    //             }
    //             if (!values.bankAccountNo) {
    //                 errors.bankAccountNo = 'กรุณากรอกข้อมูล'
    //             }
    //             if (!values.bankAccountName) {
    //                 errors.bankAccountName = 'กรุณากรอกข้อมูล'
    //             }
    //             break;
    //     }
    // }
    // if (!values.lackMoneyFrequency) {
    //     errors.lackMoneyFrequency = 'กรุณากรอกข้อมูล'
    // }
    // if (!values.loanNextMonthPossibility) {
    //     errors.loanNextMonthPossibility = 'กรุณากรอกข้อมูล'
    // }
    
    return errors
};

export default validate