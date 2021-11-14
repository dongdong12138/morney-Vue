<template>
  <Layout class-prefix="layout">
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
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
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel.ts';
import tagListModel from '@/models/tagListModel';

@Component({
  components: {Types, FormItem, Tags, NumberPad}
})
export default class Money extends Vue {
  tags = window.tagList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {tags: [], notes: '', type: '-', amount: '0'};
  // eslint-disable-next-line no-undef
  recordList: RecordItem[] = recordListModel.fetch();

  onUpdateTags(value: string[]) {
    console.log('onUpdateTags:', value);
    this.record.tags = value;
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
    recordListModel.create(this.record);
  }

  @Watch('recordList')
  onRecordListChanged() {
    recordListModel.save();
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
