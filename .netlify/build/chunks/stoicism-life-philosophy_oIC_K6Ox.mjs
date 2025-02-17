import { G as Fragment, _ as __astro_tag_component__, p as createVNode } from './astro/server_CfuWAlbb.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stoicism as a Life Philosophy",
  "description": "A personal reflection on how stoicism can transform our perspective on success and happiness",
  "pubDate": "Jan 28 2025",
  "heroImage": "",
  "slug": "stoicism-life-philosophy"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "stoicism-as-a-life-philosophy",
    "text": "Stoicism as a Life Philosophy"
  }, {
    "depth": 2,
    "slug": "the-pursuit-of-traditional-success",
    "text": "The Pursuit of Traditional Success"
  }, {
    "depth": 2,
    "slug": "the-stoic-awakening",
    "text": "The Stoic Awakening"
  }, {
    "depth": 2,
    "slug": "the-true-values",
    "text": "The True Values"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "stoicism-as-a-life-philosophy",
      children: "Stoicism as a Life Philosophy"
    }), "\n", createVNode(_components.p, {
      children: ["Last year, I made ", createVNode(_components.strong, {
        children: "a decision that would change my life"
      }), " forever: ", createVNode(_components.em, {
        children: "“Stoicism will be my life philosophy.”"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "the-pursuit-of-traditional-success",
      children: "The Pursuit of Traditional Success"
    }), "\n", createVNode(_components.p, {
      children: "For a long time, society has made us believe that our happiness and fulfillment would come from:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Having ", createVNode(_components.strong, {
          children: "more money"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Having a job with more ", createVNode(_components.strong, {
          children: "recognition"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Having a ", createVNode(_components.strong, {
          children: "bigger house"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Having an ", createVNode(_components.strong, {
          children: "expensive car"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Having the ", createVNode(_components.strong, {
          children: "latest smartphone"
        }), ", branded clothes, etc."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Since childhood, we’ve been taught that we must strive to have all of this. The common narrative suggests that ", createVNode(_components.strong, {
        children: "people will appreciate us more if we have more money, they’ll admire us more if we have an expensive car, they’ll respect us more if we have a high position in a company."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "the-stoic-awakening",
      children: "The Stoic Awakening"
    }), "\n", createVNode(_components.p, {
      children: "This idea never quite convinced me. I knew people who had everything but were depressed."
    }), "\n", createVNode(_components.p, {
      children: ["Thanks to an algorithm, I found stoicism and, after reading Seneca, Epictetus, and Marcus Aurelius, ", createVNode(_components.strong, {
        children: "I learned that what I needed to “have” were different things."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "the-true-values",
      children: "The True Values"
    }), "\n", createVNode(_components.p, {
      children: "If we want to live a life worth living, a life we won’t regret on our deathbed, it’s more important to have:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Virtues"
        }), " that guide our thoughts and actions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Routines"
        }), " that shape our days"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Aphorisms"
        }), " to turn to when our inner waters are rough"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mindset"
        }), " that’s proof against adversities and difficulties"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Attention"
        }), " directed to the present moment"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["This is what I strive to have every day. This is what guides my life. This is ", createVNode(_components.strong, {
        children: "what’s under my control."
      })]
    }), "\n", createVNode(_components.p, {
      children: "As Seneca says, we cannot put our serenity and happiness in Fortune’s hands. If we lack our inner strength and serenity, then we “have” nothing, regardless of how many material possessions we accumulate."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/stoicism-life-philosophy.mdx/";
const file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/content/blog/stoicism-life-philosophy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/content/blog/stoicism-life-philosophy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
