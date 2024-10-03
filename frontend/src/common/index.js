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
    GetCseProfProfile:{
        url:`${backendUrl}/api/CseProfProfile`,
        method:"POST"
    },
    GetCseProjectDetails:{
        url:`${backendUrl}/api/CseProjectDetails`,
        method:"POST"
    }
}

export default SummaryApi;