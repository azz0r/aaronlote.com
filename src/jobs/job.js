import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import withToggle from "../hoc/withToggle"

const noop = () => {}

const Job = ({
  description = "",
  responsibilities = "",
  alias = "",
  location = "",
  url = "",
  role = "",
  from = "",
  to = "",
  toggle = noop,
  toggleState = false,
}) => (
  <div className="job">
    <h3
      onClick={toggle}
      className="pointer"
      tabIndex={0}
      aria-expanded={toggleState}>
      <span className="url">
        <a href={url} target="_blank">
          {alias}
        </a>
      </span>
      {" · "}
      <span className="role" tabIndex={0}>
        {role}
      </span>
      {" · "}
      <span className="toggle">
        <i
          tabIndex={0}
          className={classnames(
            "far",
            { "fa-minus-square": toggleState },
            { "fa-plus-square": !toggleState },
          )}
        />
      </span>
    </h3>
    <h4 tabIndex={0}>
      {location} · {from} to {to}
    </h4>
    <div className={classnames("toggle", { open: toggleState })}>
          <p tabIndex={0}>{responsibilities}</p>
          <p
            role="region"
            tabIndex={0}
            dangerouslySetInnerHTML={{ __html: description }}
          />
    </div>
  </div>
)

Job.displayName = "Job"

Job.propTypes = {
  description: PropTypes.string,
  responsibilities: PropTypes.string,
  alias: PropTypes.string,
  location: PropTypes.string,
  url: PropTypes.string,
  role: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  toggle: PropTypes.func,
  toggleState: PropTypes.bool,
}

export default withToggle(Job)
