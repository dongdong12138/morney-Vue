<template>
  <Layout class-prefix="layout">
    <Tags/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
    </div>
    <Types :value.sync="record.type"/>
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Types, FormItem, Tags, NumberPad},
  computed: {
    // recordList = oldStore.recordList;
    recordList() {
      return this.$store.state.recordList
    }
  }
})
export default class Money extends Vue {
  // eslint-disable-next-line no-undef
  record: RecordItem = {tags: [], notes: '', type: '-', amount: '0'};
  // eslint-disable-next-line no-undef
  // recordList = oldStore.recordList;

  created() {
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes(value: string) {
    console.log('onUpdateNotes:', value);
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    console.log('onUpdateAmount:', value);
    this.record.amount = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.notes {
  padding: 12px 0;
}
</style>
