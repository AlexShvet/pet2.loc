<script setup>
import TheHeader from "../../components/TheHeader.vue";
import TheElem from "../../components/TheElem.vue";
</script>

<template>
  <TheHeader />
  <TheElem
    v-for="(employee, index) in employees"
    :key="index"
    :employee="employee"
    @delEmpl="deleteEmployee(index)"
  />

  <h2 class="message" v-if="employees.length === 0">Список сотрудников пуст</h2>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Alexandrov.H.976b48f0-7fd3-4d03-82ce-395ddeafe5d5",
          hide: true,
          thumbnail: true,
          gender: "m",
          first_name: "Герман",
          last_name: "Александров",
          middle_name: "Евгеньевич",
          birthday: "25.01",
          email: "hermansochi@ya.ru",
          cn: "Александров Герман Евгеньевич",
          telephone: "6677",
          mobile: "9899001010",
          title: "Web developer",
          department: "Dream team",
          company: "Looking for a job",
          city: "Сочи",
          created_at: "2022-10-11T12:19:10.000000Z",
          updated_at: "2022-10-11T12:19:10.000000Z",
        },
      ],
    };
  },

  methods: {
    deleteEmployee(index) {
      this.employees.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.message {
  color: var(--vt-c-grey-font);
  text-align: center;
  margin: 40px 0;
}
</style>
