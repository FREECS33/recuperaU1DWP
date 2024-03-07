<template>
  <b-container>
    <b-row>
      <b-breadcrumb>
        <b-breadcrumb-item :to="{ path: '/' }">Inicio</b-breadcrumb-item>
        <b-breadcrumb-item active>Registro</b-breadcrumb-item>
      </b-breadcrumb>
    </b-row>
    <b-row>
      <form @submit.prevent="addStudent">
        <b-form-group label="Nombre:" label-for="nombre">
          <b-form-input v-model="newStudent.Nombre" id="nombre" name="nombre" />
          <span v-if="!validateNombre(newStudent.Nombre)" class="error"
            >El nombre no debe contener números.</span
          >
        </b-form-group>
        <br />
        <b-form-group label="Edad:" label-for="edad">
          <b-form-input
            v-model="newStudent.Edad"
            id="edad"
            name="edad"
            type="number"
          />
          <span v-if="!validateEdad(newStudent.Edad)" class="error"
            >La edad debe ser un número positivo y no mayor a 100.</span
          >
        </b-form-group>
        <br />
        <b-form-group label="Cuatrimestre:" label-for="cuatrimestre">
          <b-form-input
            v-model="newStudent.cuatrimestre"
            id="cuatrimestre"
            type="number"
            name="cuatrimestre"
          />
          <span
            v-if="!validateCuatrimestre(newStudent.cuatrimestre)"
            class="error"
            >El cuatrimestre debe ser un número entre 1 y 12.</span
          >
        </b-form-group>
        <br />
        <b-form-group label="Carrera:" label-for="carrera">
          <b-form-input
            v-model="newStudent.carrera"
            id="carrera"
            name="carrera"
          />
          <span v-if="!validateCarrera(newStudent.carrera)" class="error"
            >La carrera no debe contener números.</span
          >
        </b-form-group>
        <br />
        <b-form-group class="d-flex justify-content-center">
          <b-button type="submit" variant="primary">Agregar</b-button>
        </b-form-group>
      </form>
    </b-row>
    <hr />
    <b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <b-table
        striped
        hover
        :items="students"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </b-row>
  </b-container>
</template>
  
  <script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      newStudent: {
        Nombre: null,
        Edad: null,
        cuatrimestre: null,
        carrera: null,
        ID: null,
      },
      students: [
        {
          Nombre: "Juan",
          Edad: 20,
          cuatrimestre: 3,
          carrera: "Ingeniería Civil",
          ID: 1,
        },
        {
          Nombre: "María",
          Edad: 22,
          cuatrimestre: 5,
          carrera: "Medicina",
          ID: 2,
        },
        {
          Nombre: "Luis",
          Edad: 19,
          cuatrimestre: 2,
          carrera: "Psicología",
          ID: 3,
        },
        {
          Nombre: "Ana",
          Edad: 21,
          cuatrimestre: 4,
          carrera: "Derecho",
          ID: 4,
        },
        {
          Nombre: "Pedro",
          Edad: 23,
          cuatrimestre: 6,
          carrera: "Administración de Empresas",
          ID: 5,
        },
      ],
      fields: [
        { key: "Nombre", sortable: true },
        { key: "Edad", sortable: true },
        { key: "cuatrimestre", sortable: true },
        { key: "carrera", sortable: true },
        { key: "ID", sortable: true },
      ],
    };
  },
  computed: {
    rows() {
      return this.students.length;
    },
  },
  methods: {
    addStudent() {
      if (!this.validateNombre(this.newStudent.Nombre)) {
        alert("El nombre no debe contener números.");
        return;
      }
      if (!this.validateEdad(this.newStudent.Edad)) {
        alert("La edad debe ser un número positivo y no mayor a 100.");
        return;
      }
      if (!this.validateCuatrimestre(this.newStudent.cuatrimestre)) {
        alert("El cuatrimestre debe ser un número entre 1 y 12.");
        return;
      }
      if (!this.validateCarrera(this.newStudent.carrera)) {
        alert("La carrera no debe contener números.");
        return;
      }

      const newStudentCopy = { ...this.newStudent };
      this.students.push({
        Nombre: newStudentCopy.Nombre,
        Edad: newStudentCopy.Edad,
        cuatrimestre: newStudentCopy.cuatrimestre,
        carrera: newStudentCopy.carrera,
        ID: this.students.length + 1,
      });
      this.newStudent.Nombre = "";
      this.newStudent.Edad = null;
      this.newStudent.cuatrimestre = null;
      this.newStudent.carrera = "";
    },
    validateNombre(nombre) {
      return /^[^\d]+$/.test(nombre);
    },
    validateEdad(edad) {
      return !isNaN(edad) && edad > 0 && edad <= 100;
    },
    validateCuatrimestre(cuatrimestre) {
      return !isNaN(cuatrimestre) && cuatrimestre >= 1 && cuatrimestre <= 12;
    },
    validateCarrera(carrera) {
      return /^[^\d]+$/.test(carrera);
    },
  },
};
</script>
  
  <style>
.error {
  color: red;
}
</style>
  