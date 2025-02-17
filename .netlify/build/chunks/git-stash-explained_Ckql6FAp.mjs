import { G as Fragment, _ as __astro_tag_component__, p as createVNode } from './astro/server_CfuWAlbb.mjs';
import 'clsx';

const frontmatter = {
  "title": "Git Stash: A Safe Place for Your Work in Progress",
  "description": "Learn how to temporarily store your changes with Git stash and why it can save you in tricky situations",
  "pubDate": "Jan 29 2025",
  "heroImage": "",
  "slug": "git-stash-explained"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "what-is-git-stash",
    "text": "What is Git Stash?"
  }, {
    "depth": 1,
    "slug": "when-do-i-use-git-stash",
    "text": "When Do I Use Git Stash?"
  }, {
    "depth": 1,
    "slug": "basic-stash-commands-i-use-daily",
    "text": "Basic Stash Commands I Use Daily"
  }, {
    "depth": 2,
    "slug": "saving-changes",
    "text": "Saving Changes"
  }, {
    "depth": 2,
    "slug": "viewing-stashed-changes",
    "text": "Viewing Stashed Changes"
  }, {
    "depth": 2,
    "slug": "retrieving-changes",
    "text": "Retrieving Changes"
  }, {
    "depth": 2,
    "slug": "cleaning-up",
    "text": "Cleaning Up"
  }, {
    "depth": 1,
    "slug": "important-things-to-remember",
    "text": "Important Things to Remember"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "As a developer, I often find myself in situations where I’m working on some changes but suddenly need to switch context - maybe to fix a critical bug on another branch or help a teammate with their code. This is where Git stash becomes my best friend."
    }), "\n", createVNode(_components.h1, {
      id: "what-is-git-stash",
      children: "What is Git Stash?"
    }), "\n", createVNode(_components.p, {
      children: "Git stash is like a drawer where you can temporarily store your work in progress without committing it. It’s separate from your working directory, staging area, and repository. Think of it as a safe place where your changes won’t get lost when you need to switch contexts."
    }), "\n", createVNode(_components.h1, {
      id: "when-do-i-use-git-stash",
      children: "When Do I Use Git Stash?"
    }), "\n", createVNode(_components.p, {
      children: "The most common scenario where I use stash is when I need to switch branches but have uncommitted changes. Instead of creating a messy commit or losing my work, I can simply stash my changes, switch branches, and later retrieve them when I’m ready."
    }), "\n", createVNode(_components.h1, {
      id: "basic-stash-commands-i-use-daily",
      children: "Basic Stash Commands I Use Daily"
    }), "\n", createVNode(_components.p, {
      children: "Let’s go through the commands I use most frequently:"
    }), "\n", createVNode(_components.h2, {
      id: "saving-changes",
      children: "Saving Changes"
    }), "\n", createVNode(_components.p, {
      children: "To store changes in the stash, I use:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " save"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"optional message\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "I always try to add a descriptive message - it has saved me countless times when trying to remember what I was working on."
    }), "\n", createVNode(_components.h2, {
      id: "viewing-stashed-changes",
      children: "Viewing Stashed Changes"
    }), "\n", createVNode(_components.p, {
      children: "To see what I have stored, I use:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " list"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This shows me all my stashed changes in the format ", createVNode(_components.code, {
        children: "stash@{0}: BRANCH: MESSAGE"
      }), ". The number in curly braces is the stash index - think of it as an ID for each set of changes."]
    }), "\n", createVNode(_components.p, {
      children: "If I need to see the actual changes in a stash, I use:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " show"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash@{"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "-p"
      }), " flag gives me a detailed view of the changes, which is particularly helpful when I have multiple stashes and need to find the right one."]
    }), "\n", createVNode(_components.h2, {
      id: "retrieving-changes",
      children: "Retrieving Changes"
    }), "\n", createVNode(_components.p, {
      children: "When I want to get my changes back, I have two options:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " apply"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash@{"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  # Applies changes and keeps them in stash"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pop"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash@{"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # Applies changes and removes them from stash"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["I typically use ", createVNode(_components.code, {
        children: "pop"
      }), " when I’m sure I won’t need those changes again, and ", createVNode(_components.code, {
        children: "apply"
      }), " when I might need to apply the same changes multiple times."]
    }), "\n", createVNode(_components.h2, {
      id: "cleaning-up",
      children: "Cleaning Up"
    }), "\n", createVNode(_components.p, {
      children: "To keep my stash organized, I occasionally need to remove old stashes:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " drop"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash@{"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  # Removes a specific stash"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clear"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "          # Removes all stashes"
          })]
        })]
      })
    }), "\n", createVNode(_components.h1, {
      id: "important-things-to-remember",
      children: "Important Things to Remember"
    }), "\n", createVNode(_components.p, {
      children: "Through my experience with Git stash, I’ve learned a few important lessons:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Stash only works with tracked files. If you’ve created new files, make sure to add them to Git first."
      }), "\n", createVNode(_components.li, {
        children: "Stashes are available across all branches in your repository."
      }), "\n", createVNode(_components.li, {
        children: "You might encounter conflicts when applying stashed changes - resolve them just like you would resolve merge conflicts."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Git stash has become an essential tool in my daily workflow. It gives me the flexibility to quickly switch between tasks without losing work or creating unnecessary commits. While it might seem like a simple feature, knowing how to use it effectively can make a big difference in your development workflow."
    }), "\n", createVNode(_components.p, {
      children: "What git stash commands do you use most often? Let me know in the comments below!"
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

const url = "src/content/blog/git-stash-explained.mdx/";
const file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/content/blog/git-stash-explained.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/content/blog/git-stash-explained.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
