<template>
  <div class="component">
    <v-card flat class="grey lighten-5">
      <v-card-title>
        <v-col cols="4">
          <v-select
            outlined
            dense
            v-model="selectedYears"
            :items="years"
            attach
            chips
            color="base"
            :label="$t('pages.publications.publicationYear')"
            multiple
          >
            <template v-slot:selection="{ attrs, item }">
              <v-chip v-bind="attrs" class="white--text" color="base">
                <template class="pr-2">
                  {{ item }}
                </template>
              </v-chip>
            </template>
          </v-select>
        </v-col>
        <v-col cols="8">
          <v-select
            clearable
            outlined
            dense
            v-model="currentConference"
            :items="conferences"
            attach
            chips
            color="base"
            :label="'Conference'"
          >
            <template v-slot:selection="{ attrs, item }">
              <v-chip v-bind="attrs" class="white--text" color="base">
                <template class="pr-2">
                  {{ item }}
                </template>
              </v-chip>
            </template>
          </v-select>
        </v-col>
      </v-card-title>
    </v-card>
    <list-publications
      :data="filtered.length ? filtered : all()"
      :conference="currentConference"
    />
  </div>
</template>

<script>
import listPublications from "../commom/ListPublications.vue";
import Publications from "../../texts/Publications";
import { filterPublications } from "../../functions/publications.js";
import { filterMembers } from "../../functions/members.js";

export default {
  components: {
    listPublications,
  },
  data() {
    return {
      lastDateSelected: [2020],
      selectedYears: [],
      currentConference: "",
      publicacoes: Publications,
      expanded: [],
      singleExpand: false,
      filtered_publications: [],
    };
  },
  created() {
    this.filtered_publications = this.all;
  },
  filters: {
    teste(value) {
      let arr_ret = [];
      value.map(function (item) {
        arr_ret.push(new filterMembers().byKey(item));
      });

      return arr_ret.join(", ");
    },
  },
  computed: {
    years() {
      return new filterPublications().getYears();
    },
    conferences() {
      return new filterPublications().getConferences();
    },
    filtered() {
      return new filterPublications().byYears(this.selectedYears);
    },
    all() {
      return new filterPublications().all;
    },
  },
  methods: {
    changeDates(year) {
      if (this.selectedYears.includes(year)) {
        let idx = this.selectedYears.indexOf(year);
        this.selectedYears.splice(idx, 1);
      } else {
        this.selectedYears.push(year);
      }
    },
    setYear() {
      this.selectedYears = [
        2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
      ];
    },
  },
};
</script>

<style scoped>
.component {
  padding-bottom: 10%;
}
.year {
  font-size: 30px;
  color: rgb(56, 56, 56);
}

h1 {
  color: rgb(71, 71, 71);
}
.autor {
  color: rgb(73, 73, 73);
}
.capitalize {
  text-transform: capitalize;
}
</style>
