import PropTypes from 'prop-types';

export const SectionTitle = ({ title, child }) => {
  return (
    <section>
      <h2>{title}</h2>
      {child}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  child: PropTypes.element,
};
