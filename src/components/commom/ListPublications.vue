<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="data"
            class="grey lighten-5"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            item-key="title"
            show-expand
        >
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="(item, i) in items" :key="`${i}-${item.id}`">
                        <td> <v-chip class="base white--text"> <b> {{ item.year }} </b> </v-chip> </td>
                            <td v-if="!item.language"></td>
                            <td v-else-if="item.language === 'en'"> <img width="20" :src="require(`@/assets/united-states.png`)"> </td>
                            <td v-else-if="item.language === 'pt-br'"> <img width="20" :src="require(`@/assets/brazil.png`)"> </td>
                            <td v-else></td>
                            <td>{{ item.title }}</td>
                            <td><span>{{ item.short }}</span> <span v-if="!item.short" >({{ item.type }})</span> </td>
                            <td>{{ item.authors | teste }}</td>
                            <td>
                            <a v-if="item.download" :href="`/assets/pdf/${item.download}`" target="_blank"> <img width="20" :src="require(`@/assets/pdf.png`)"> </a>
                            <a v-if="item.publication_link" :href="`${item.publication_link}`" target="_blank"> <img width="20" :src="require(`@/assets/globe.png`)"> </a>
                        </td>
                    </tr>
                </tbody>
            </template>
            <template v-slot:expanded-item="{  item }">
                <span v-for="author in item.authors" :key="author"> {{ author }} </span>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    props: [ 'data' ],
    data(){
        return{

        }
    },
    filters: {
        teste(value){
            return value.join(", ")
        }
    }
}
</script>