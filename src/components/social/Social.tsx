import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface SocialProps {}
export default function Social(props: SocialProps) {
  return (
    <ul role="list" className="flex gap-x-small text-2xl">
      <li role="listitem">
        <a
          href="https://github.com/carlosreyesweb"
          target="_blank"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://linkedin.com/in/carlosreyesweb"
          target="_blank"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </li>
      <li role="Twitter">
        <a
          href="https://twitter.com/carlosreyesweb"
          target="_blank"
          title="Twitter"
        >
          <FaTwitter />
        </a>
      </li>
      <li role="Instagram">
        <a
          href="https://instagram.com/carlosreyesweb"
          target="_blank"
          title="Instagram"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  )
}
