import { Avatar, AvatarSizeEnum, AvatarShapeEnum } from 'common/roq-ui/avatar'
import { Avatar2 } from 'common/roq-ui/avatar2'
import { useTheme } from 'next-themes'
export default function Home() {
  const { theme, setTheme } = useTheme()

  const classes = {
    border: 'border-red-500'
  }
  const classes2 = {
    border: 'border-green-500'
  }

  const toggle = () => {
    if (!document.documentElement.classList.contains("dark")) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="p-6 container">
      <button onClick={toggle} className="pb-12">
        Click to toggle dark mode (white/black)
      </button>
      <div className="grid grid-cols-2">
        <div>
          <h1>NEW VERSION</h1>
          <h2>Sizes</h2>
          <div className="flex">
            <Avatar2 size="xsmall">
              BP
            </Avatar2>
            <Avatar2 size="small">
              BP
            </Avatar2>
            <Avatar2 size="medium">
              BP
            </Avatar2>
            <Avatar2 size="large">
              BP
            </Avatar2>
            <Avatar2 size="xlarge">
              BP
            </Avatar2>
          </div>
          <h2>Border</h2>
          <div className="flex">
            <Avatar2 size="xlarge" border>
              BP
            </Avatar2>
          </div>
          <h2>Border with custom styles</h2>
          <div className="flex">
            <Avatar2 size="xlarge" border classes={classes}>
              BP
            </Avatar2>
          </div>
          <h2>Accent</h2>
          <div className="flex">
            <Avatar2 size="xlarge" accent>
              BP
            </Avatar2>
          </div>
          <h2>Accent with custom styles</h2>
          <div className="flex">
            <Avatar2 size="xlarge" accent border classes={classes2}>
              BP
            </Avatar2>
          </div>
          <h2>Custom component (span)</h2>
          <div className="flex">
            <Avatar2 size="xlarge" component="span">
              BP
            </Avatar2>
          </div>
        </div>
        <div>
          <h2>ORIGINAL VERSION</h2>
          <h2>Sizes</h2>
          <div className="flex">
            <Avatar size={AvatarSizeEnum.SMALLEST} />
            <Avatar size={AvatarSizeEnum.SMALL}/>
            <Avatar />
            <Avatar size={AvatarSizeEnum.LARGE} />
            <Avatar size={AvatarSizeEnum.HUGE} />
          </div>
          <Avatar shape={AvatarShapeEnum.CIRCLE} border>
            <span className="text-red-500 text-black">AK</span>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
