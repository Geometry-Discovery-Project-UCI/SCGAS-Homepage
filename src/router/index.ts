import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import ParticipantsView from "@/views/ParticipantsView.vue";
import ProgramView from "@/views/ProgramView.vue";
import AccommodationView from "@/views/AccommodationView.vue";
import TransportationView from "@/views/TransportationView.vue";
import PastSeminarsView from "@/views/PastSeminarsView.vue";
import PosterView from "@/views/PosterView.vue";
import ReimbursementView from "@/views/ReimbursementView.vue";

export const routes: Array<RouteRecordRaw & { hidden?: boolean }> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    name: "registration",
    path: "/registration",
    component: RegistrationView,
  },
  {
    name: "participants",
    path: "/participants",
    component: ParticipantsView,
  },
  {
    name: "program",
    path: "/program",
    component: ProgramView,
  },
  {
    name: "accommodation",
    path: "/accommodation",
    component: AccommodationView,
  },
  {
    name: "transportation",
    path: "/transportation",
    component: TransportationView,
  },
  {
    name: "past seminars",
    path: "/past-seminars",
    component: PastSeminarsView,
  },
  {
    name: "poster",
    path: "/poster",
    component: PosterView,
  },
  {
    name: "reimbursement",
    path: "/reimbursement",
    component: ReimbursementView,
    hidden: true,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
    hidden: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
