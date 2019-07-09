import About from './page/About'
import Main from './page/Main'
 
const router =[
    {
        path:"/",
        exact:true,
        component:Main,
    },
    {
        path:"/About",
        exact:true,
        component:About,
    }
/*    {
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
    }*/
]

export default router;