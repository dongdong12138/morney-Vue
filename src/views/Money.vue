<template>
  <Layout class-prefix="layout">

    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>

    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>

    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>

    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button class="ok">OK</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>/</button>
      </div>
    </div>

  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  border: 1px solid red;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > ul.current {
    display: flex;

    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid;
      padding: 0 4px;
      color: #999;
    }
  }
}

.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  > input {
    height: 64px;
    background: transparent;
    border: none;
    flex-grow: 1;
  }
}

.types {
  background: #c4c4c4;
  display: flex;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: "";
      width: 100%;
      height: 4px;
      background: #333;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}

.numberPad {
  > .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }

  > .buttons {
    @extend %clearFix;

    > button {
      width: 20%;
      height: 64px;
      float: left;
      background: none;
      border: none;

      &.ok {
        height: 64*2px;
        float: right;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(6) {
        background: darken($bg, 4%)
      }

      &:nth-child(3), &:nth-child(7), &:nth-child(11) {
        background: darken($bg, 8%)
      }

      &:nth-child(4), &:nth-child(8), &:nth-child(12), &:nth-child(16) {
        background: darken($bg, 12%)
      }

      &:nth-child(5), &:nth-child(9), &:nth-child(13), &:nth-child(17) {
        background: darken($bg, 16%)
      }

      &:nth-child(10), &:nth-child(14), &:nth-child(18) {
        background: darken($bg, 20%)
      }

      &:nth-child(19) {
        background: darken($bg, 24%)
      }

      &:nth-child(15) {
        background: darken($bg, 28%)
      }
    }
  }
}

</style>