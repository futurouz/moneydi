const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.mobileNo) {
        errors.mobileNo = 'Required'
    }
    if (!values.citizenId) {
        errors.citizenId = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    // if (!values.homeType) {
    //     errors.homeType = 'Required'
    // }
    // if (!values.homeStatus) {
    //     errors.homeStatus = 'Required'
    // }
    // if (!values.education) {
    //     errors.education = 'Required'
    // }
    // if (!values.status) {
    //     errors.status = 'Required'
    // }
    if (!values.contactFirstName) {
        errors.contactFirstName = 'Required'
    }
    if (!values.contactLastName) {
        errors.contactLastName = 'Required'
    }
    if (!values.contactMobile) {
        errors.contactMobile = 'Required'
    }
    // if (!values.relation) {
    //     errors.relation = 'Required'
    // }
    // if (!values.work) {
    //     errors.work = 'Required'
    // }
    // if (!values.workStatus) {
    //     errors.workStatus = 'Required'
    // }
    if (!values.workName) {
        errors.workName = 'Required'
    }
    if (!values.workAddress) {
        errors.workAddress = 'Required'
    }
    if (!values.workMobile) {
        errors.workMobile = 'Required'
    }
    if (!values.workPosition) {
        errors.workPosition = 'Required'
    }
    if (!values.workDepartment) {
        errors.workDepartment = 'Required'
    }
    if (!values.income) {
        errors.income = 'Required'
    }
    // if (!values.salaryMethod) {
    //     errors.salaryMethod = 'Required'
    // }
    if (!values.getSalaryTimes) {
        errors.getSalaryTimes = 'Required'
    }
    // if (!values.cashCard) {
    //     errors.cashCard = 'Required'
    // }
    // if (!values.loanTimeIn2Month) {
    //     errors.loanTimeIn2Month = 'Required'
    // }
    if (!values.objective) {
        errors.objective = 'Required'
    }
    if (!values.needLoan) {
        errors.needLoan = 'Required'
    }
    if (!values.minimumLoan) {
        errors.minimumLoan = 'Required'
    }
    
    return errors
};

export default validate