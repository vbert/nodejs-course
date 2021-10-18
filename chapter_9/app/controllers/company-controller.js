const { where } = require('../db/models/company');
const Company = require('../db/models/company');

class CompanyController {

  async showCompanies(req, res) {
    const { q, sort, countmin, countmax } = req.query;
    const page = req.query.page || 1;
    const perPage = 2;

    // search
    const where = {};
    if (q) {
      where.name = { $regex: q, $options: 'i' };
    }

    // filters
    if (countmin || countmax) {
      where.employeesCount = {};
      if (countmin) {
        where.employeesCount.$gte = countmin; // $gte - większe równe, z mongo
      }
      if (countmax) {
        where.employeesCount.$lte = countmin; // $lte - mniejsze równe, z mongo
      }
    }

    let query = Company.find(where);

    // pagination
    query = query.skip((page - 1) * perPage);
    query = query.limit(perPage);

    // sorting
    if (sort) {
      const s = sort.split('|');
      query = query.sort({ [s[0]]: s[1] });
    }

    // exec
    const companies = await query.exec();
    const resultsCount = await Company.find(where).count();
    const pagesCount = Math.ceil(resultsCount / perPage);

    res.render('pages/companies/companies', {
      companies,
      page,
      pagesCount,
      resultsCount
    });
  }

  async showCompany(req, res) {
    const { name } = req.params;

    const company = await Company.findOne({slug: name});

    res.render('pages/companies/company', { 
      name: company?.name,
      title: company?.name ?? 'Brak wyników'
    });
  }

  showCreateCompanyForm(req, res) {
    res.render('pages/companies/create');
  }

  async createCompany(req, res) {
    const company = new Company({
      name: req.body.name,
      slug: req.body.slug,
      employeesCount: req.body.employeesCount || undefined,
    });

    try {
      await company.save();
      res.redirect('/firmy');
    } catch (e) {
      res.render('pages/companies/create', {
        errors: e.errors,
        form: req.body
      });
    }
  }

  async showEditCompanyForm(req, res) {
    const { name } = req.params;
    const company = await Company.findOne({ slug: name });

    res.render('pages/companies/edit', {
      form: company
    });
  }

  async editCompany(req, res) {
    const { name } = req.params;
    const company = await Company.findOne({ slug: name });
    company.name = req.body.name;
    company.slug = req.body.slug;
    company.employeesCount = req.body.employeesCount;

    try {
      await company.save();
      res.redirect('/firmy');
    } catch (e) {
      res.render('pages/companies/edit', {
        errors: e.errors,
        form: req.body
      });
    }
  }

  async deleteCompany(req, res) {
    const { name } = req.params;

    try {
      await Company.deleteOne({ slug: name });
      res.redirect('/firmy');
    } catch (e) {
      // 
    }
  }
}

module.exports = new CompanyController();
