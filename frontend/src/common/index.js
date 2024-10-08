const backendUrl="http://localhost:8000";

const SummaryApi={
    GetCseProf:{
        url:`${backendUrl}/api/CseProf`,
        method:"GET"
    },
    GetCseNews:{
        url:`${backendUrl}/api/CseNews`,
        method:"GET"
    },
    GetCseStaff:{
        url:`${backendUrl}/api/CseStaff`,
        method:"GET"
    },
    GetCseProfProfile:{
        url:`${backendUrl}/api/CseProfProfile`,
        method:"POST"
    },
    GetCseProjectDetails:{
        url:`${backendUrl}/api/CseProjectDetails`,
        method:"POST"
    },
    DeveloperLogin:{
        url:`${backendUrl}/api/DevLogin`,
        method:"POST"
    }
}

export default SummaryApi;