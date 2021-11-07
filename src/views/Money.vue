<template>
  <Layout class-prefix="layout">
    {{ record }}
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes @update:value="onUpdateNotes"/>
    <Types :value.sync="record.type"/>
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[],
  notes: string,
  type: string,
  amount: string
}

@Component({
  components: {Types, Notes, Tags, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {tags: [], notes: '', type: '-', amount: '0'};
  recordList: Record[] = [];

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
    const record = JSON.parse(JSON.stringify(this.record))    // 深拷贝 record 对象
    this.recordList.push(record);
  }

  @Watch('recordList')
  onRecordListChanged(value: string, oldVal: string) {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
