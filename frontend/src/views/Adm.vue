<template>
  <div class="adm-container">
    <div class="adm-table-container">
      <table class="adm-table">
        <thead class="adm-thead">
          <td width="50%">Nome</td>
          <td width="25%">CRM</td>
          <td width="25%">Status</td>
        </thead>
        <tbody class="adm-tbody">
          <tr v-for="doctor in doctors" :key="doctor.doctor_id">
            <td>{{ doctor.doctor_name }}</td>
            <td>{{ doctor.doctor_crm }}</td>
            <td>
              <select
                name="doctor"
                id="doctor-select"
                @change="postStatus(doctor)"
                v-model="doctor.doctor_active"
              >
                <option value="1">Ativado</option>
                <option value="0">Desativado</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "Adm",
  data() {
    return {
      doctors: []
    };
  },
  methods: {
    getDoctors() {
      axios
        .get(`${baseApiUrl}/doctor`)
        .then(res => {
          this.doctors = res.data;
        })
        .catch(err => {
          alert(err);
        });
    },
    postStatus(doctor) {
      /*let doctorAux;

      doctorAux.id = doctor.doctor_id;
      doctorAux.name = doctor.doctor_name;
      doctorAux.email = doctor.doctor_email;
      doctorAux.crm = doctor.doctor_crm;
      doctorAux.gender = doctor.doctor_gender;
      doctorAux.password = doctor.doctor_password;
      doctorAux.city = doctor.doctor_city;
      doctorAux.uf = doctor.doctor_uf;
      doctorAux.active = doctor.doctor_active;*/

      axios.put(`${baseApiUrl}/doctor`, doctor)
    }
  },
  mounted() {
    this.getDoctors();
  }
};
</script>

<style>
.adm-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.adm-table-container {
  width: 500px;
  height: 500px;
  background-color: #ccc;
  border: black solid 1px;
}

.adm-thead {
  background-color: #eee;
}

.adm-tbody td {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(183, 190, 191, 1) 100%
  );
  padding: 5px;
}
</style>