import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import ReceivedRequest from './pages/requests/ReceivedRequest.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches',
        },
        {
            path: '/coaches',
            component: CoachesList,
        },
        {
            path: '/coaches/:id',
            component: CoachDetails,
            props: true,
            children: [
                {
                    path: 'contact',
                    component: ContactCoach,
                },
            ],
        },
        {
            path: '/register',
            component: CoachRegister,
        },
        {
            path: '/requests',
            component: ReceivedRequest,
        },
        {
            path: '/:notfound(.*)',
            component: NotFound,
        },
    ],
});

export default router;