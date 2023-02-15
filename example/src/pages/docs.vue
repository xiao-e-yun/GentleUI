<script lang="ts" setup>
import { Image, Block, Content, Code, Button, ButtonGroup } from "gentle-ui"
</script>

<template>
  <Block>
    <h1>Global Tag List</h1>
    <Block>
      <h2>Content And Block</h2>
      <p>Please try to avoid <Code :inline="true">&lt;Block&gt;</Code> with more than 3 floors</p>
      <Code>
          &lt;Content&gt;
            &lt;Block&gt;Block&lt;/Block&gt;
          &lt;/Content&gt;
        </Code>

      <Block>
        <h3>Preview</h3>
        <Content>
          <Block>Block</Block>
        </Content>
      </Block>

    </Block>
  </Block>
  <Block>
    <h1>Base Tag List</h1>

    <Block>
      <h2>Image</h2>

      <Code>
          &lt;Image src=&quot;https://static.xiaoeyun.me/img/background.webp&quot; alt=&quot;Image Test&quot; :lazyload=&quot;true&quot; /&gt;
        </Code>

      <Block>
        <h3>Preview</h3>
        <Image src="https://static.xiaoeyun.me/img/background.webp" alt="Image Test" :lazyload="true" />
      </Block>

    </Block>

    <Block>
      <h2>Code</h2>

      <Code>&lt;Code&gt;HelloWorld&lt;/Code&gt;</Code>

      <Block>
        <h3>Preview</h3>
        <Code>HelloWorld</Code>
      </Block>

    </Block>

    <Block>
      <h2>Button</h2>

      <Code>&lt;Button&gt;HelloWorld&lt;/Button&gt;</Code>

      <Block>
        <h3>Preview</h3>
        <Button>Click Me</Button>
      </Block>

    </Block>

    <Block>
      <h2>ButtonGroup</h2>

      <Code>&lt;ButtonGroup&gt;&lt;Button&gt;Frist&lt;/Button&gt;&lt;Button&gt;Second&lt;/Button&gt;&lt;/ButtonGroup&gt;</Code>

      <Block>
        <h3>Preview</h3>
        <ButtonGroup><Button>Frist</Button><Button>Second</Button></ButtonGroup>
      </Block>

    </Block>

  </Block>
</template>