import Hobby from './page/About/Hobby'
import Plan from './page/About/Plan'
import WorkExprence from './page/About/WorkExperience'
import About from './page/About'

const router =[
    {
        path:"/About",
        exact:true,
        component:About,
    },
    {
        path:'/About/Plan',
        component:Plan,
    },
    {
        path:"/About/Hobby",
        component:Hobby,
    },
    {
        path:"/About/WorkExperience",
        component:WorkExprence,
    }
]

export default router;