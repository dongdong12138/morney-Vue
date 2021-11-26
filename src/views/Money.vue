<template>
  <Layout class-prefix="layout">
    <Tags/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
    </div>
    <Tabs :data-source="recordtypeList" :value.sync="record.type"/>
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, FormItem, Tags, NumberPad},
})
export default class Money extends Vue {
  // eslint-disable-next-line no-undef
  record: RecordItem = {tags: [], notes: '', type: '-', amount: '0'};
  get recordList() {
    return this.$store.state.recordList
  }
  recordtypeList = recordTypeList

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
